import {useParams} from "react-router-dom";
import axios from "axios";
import {CRYPTO_ID} from "../../../env";
import {useState} from "react";

export default function CryptoPage() {
    const [crypto, setCrypto] = useState();
    const {id} = useParams();
    console.log(CRYPTO_ID + id);
    axios.get(`${CRYPTO_ID}${id}`)
        .then((data) => {
            setCrypto(data.data.data);
        }).catch(() => {
        console.log("Error al obtener informacion");
    });
    return (<h1>Crypto: {crypto}</h1>);
}