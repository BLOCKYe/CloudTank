import axios from 'axios';

export class FetchMainPage {
    /**
     * This method is used
     * to get promo details
     */
    public static async promo() {
        const response = await axios.get(
            `https://cloud-tank-server.herokuapp.com/promos`
        );
        return response?.data[0];
    }

    /**
     * This method is used
     * to get feedback list
     */
    public static async feedback() {
        const response = await axios.get(
            `https://cloud-tank-server.herokuapp.com/feedbacks`
        );
        return response?.data;
    }

    /**
     * This method is used
     * to get faq details
     */
    public static async faq() {
        const response = await axios.get(
            `https://cloud-tank-server.herokuapp.com/faqs`
        );
        return response?.data;
    }
}

export class FetchSubpages {
    /**
     * This method is used
     * to get Chimera data
     */
    public static async chimera() {
        const response = await axios.get(
            `https://cloud-tank-server.herokuapp.com/chimeras`
        );
        return response?.data[0];
    }

    /**
     * This method is used
     * to get Chimera data
     */
    public static async excalibur() {
        const response = await axios.get(
            `https://cloud-tank-server.herokuapp.com/excaliburs`
        );
        return response?.data[0];
    }

    /**
     * This method is used
     * to get Excalibur data
     */
    public static async moe() {
        const response = await axios.get(
            `https://cloud-tank-server.herokuapp.com/moes`
        );
        return response?.data[0];
    }

    /**
     * This method is used
     * to get Object260 data
     */
    public static async obiekt260() {
        const response = await axios.get(
            `https://cloud-tank-server.herokuapp.com/object-260-s`
        );
        return response?.data[0];
    }

    /**
     * This method is used
     * to get Object279e data
     */
    public static async obiekt279e() {
        const response = await axios.get(
            `https://cloud-tank-server.herokuapp.com/object-279-s`
        );
        return response?.data[0];
    }

    /**
     * This method is used
     * to get StugIV data
     */
    public static async stugIV() {
        const response = await axios.get(
            `https://cloud-tank-server.herokuapp.com/stug-ivs`
        );
        return response?.data[0];
    }

    /**
     * This method is used
     * to get T28Concept data
     */
    public static async T28Concept() {
        const response = await axios.get(
            `https://cloud-tank-server.herokuapp.com/t-28-concepts`
        );
        return response?.data[0];
    }

    /**
     * This method is used
     * to get T55A data
     */
    public static async T55A() {
        const response = await axios.get(
            `https://cloud-tank-server.herokuapp.com/t-55-as`
        );
        return response?.data[0];
    }

    /**
     * This method is used
     * to get T55A data
     */
    public static async WN8() {
        const response = await axios.get(
            `https://cloud-tank-server.herokuapp.com/wn-8-s`
        );
        return response?.data[0];
    }
}
