import axios from "axios";
//ésta es la URL base de la API REST
const BICICLETA_BASE_REST_API_URL = 'http://localhost:8080/api/v1/bicicletas';

class BicicletaService {
    getAllBicicletas(){
        return axios.get(BICICLETA_BASE_REST_API_URL);
    }
}