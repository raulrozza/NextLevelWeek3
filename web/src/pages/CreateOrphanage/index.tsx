import React, { useState } from 'react';

// Components
import Aside from '../../components/Aside';
import { Map, Marker, TileLayer } from 'react-leaflet';
import { Field, Form, Formik } from 'formik';

// Hooks
import useGeoposition from '../../hooks/useGeoposition';
import { usePost } from '../../hooks/usePost';
import { useHistory } from 'react-router-dom';

// Icons
import mapIcon from '../../constants/mapIcon';
import { FiPlus } from 'react-icons/fi';

// Schemas
import { CreateOrphanageSchema } from './schemas';

// Styles
import {
  Container,
  ImagesContainer,
  Main,
  OpenOnWeekendsContainer,
} from './styles';

// Types
import { LeafletMouseEvent } from 'leaflet';
import { FormValues } from './types';

// Utils
import {
  createFormDataFromObject,
  getImagesFromInputAndSet,
  imagesArrayToURL,
} from './helpers';

const CreateOrphanage: React.FC = () => {
  const initialMapPosition = useGeoposition();
  const { push } = useHistory();
  const apiPost = usePost();

  const initialValues: FormValues = {
    name: '',
    about: '',
    instructions: '',
    opening_hours: '',
    open_on_weekends: false,
  };

  const [position, setPosition] = useState({ latitude: 0, longitude: 0 });
  const [images, setImages] = useState<File[]>([]);
  const [disabled, setDisabled] = useState(false);

  const handleMapClick = (event: LeafletMouseEvent) => {
    setPosition({
      latitude: event.latlng.lat,
      longitude: event.latlng.lng,
    });
  };

  const handleSubmit = async (values: FormValues) => {
    const { latitude, longitude } = position;

    const formValues = {
      ...values,
      latitude: String(latitude),
      longitude: String(longitude),
      open_on_weekends: String(values.open_on_weekends),
    };

    const data = createFormDataFromObject(formValues);
    images.forEach(image => data.append('images', image));

    setDisabled(true);

    const result = await apiPost('orphanages', data);

    if (result) push('/app');

    setDisabled(false);
  };

  return (
    <Container>
      <Aside />

      <Main>
        <Formik
          initialValues={initialValues}
          validationSchema={CreateOrphanageSchema}
          onSubmit={handleSubmit}
        >
          {({ values, setFieldValue }) => (
            <Form className="create-orphanage-form">
              <fieldset>
                <legend>Dados</legend>

                <Map
                  center={initialMapPosition}
                  style={{ width: '100%', height: 280 }}
                  zoom={15}
                  onClick={handleMapClick}
                >
                  <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />

                  {position.latitude !== 0 && position.longitude !== 0 && (
                    <Marker
                      interactive={false}
                      icon={mapIcon}
                      position={[position.latitude, position.longitude]}
                    />
                  )}
                </Map>

                <div className="input-block">
                  <label htmlFor="name">Nome</label>
                  <Field id="name" name="name" required />
                </div>

                <div className="input-block">
                  <label htmlFor="about">
                    Sobre <span>Máximo de 300 caracteres</span>
                  </label>
                  <Field
                    name="about"
                    id="about"
                    maxLength={300}
                    as="textarea"
                    required
                  />
                </div>

                <div className="input-block">
                  <label htmlFor="images">Fotos</label>

                  <ImagesContainer>
                    <label htmlFor="images" className="new-image">
                      <FiPlus size={24} color="#15b6d6" />
                    </label>

                    {imagesArrayToURL(images).map(url => (
                      <img src={url} alt="Imagem do orfanato" key={url} />
                    ))}

                    <input
                      type="file"
                      multiple
                      id="images"
                      onChange={event =>
                        getImagesFromInputAndSet(event, setImages)
                      }
                    />
                  </ImagesContainer>
                </div>
              </fieldset>

              <fieldset>
                <legend>Visitação</legend>

                <div className="input-block">
                  <label htmlFor="instructions">Instruções</label>
                  <Field
                    as="textarea"
                    name="instructions"
                    id="instructions"
                    required
                  />
                </div>

                <div className="input-block">
                  <label htmlFor="opening_hours">Horário de abertura</label>
                  <Field name="opening_hours" id="opening_hours" required />
                </div>

                <div className="input-block">
                  <label htmlFor="open_on_weekends">Atende fim de semana</label>

                  <OpenOnWeekendsContainer>
                    <button
                      type="button"
                      className={values.open_on_weekends ? 'active' : ''}
                      onClick={() => setFieldValue('open_on_weekends', true)}
                    >
                      Sim
                    </button>
                    <button
                      type="button"
                      className={!values.open_on_weekends ? 'active' : ''}
                      onClick={() => setFieldValue('open_on_weekends', false)}
                    >
                      Não
                    </button>
                  </OpenOnWeekendsContainer>
                </div>
              </fieldset>

              <button
                className="confirm-button"
                disabled={disabled}
                type="submit"
              >
                Confirmar
              </button>
            </Form>
          )}
        </Formik>
      </Main>
    </Container>
  );
};

export default CreateOrphanage;
