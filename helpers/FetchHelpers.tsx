import axios from 'axios';

export const fetchNickname = async (nickname: string) => {
    const response = await axios.get(
        `https://api.worldoftanks.eu/wot/account/list/?application_id=ea5b62e33ac1babf3bc5c621d0dab391&search=${nickname}`
    );

    if (response?.data?.meta?.count === 0 || response?.data?.status !== 'ok') {
        return false;
    } else return true;
};

export const fetchTanks = async (tier: string) => {
    const response = await axios.get(
        `https://api.worldoftanks.eu/wot/encyclopedia/vehicles/?application_id=ea5b62e33ac1babf3bc5c621d0dab391&fields=tier%2C+name&tier=${tier}`
    );
    return response?.data?.data;
};

export const createRequest = async (data: any) => {
    let config: any = {
        method: 'post',
        url: `${process.env.NEXT_PUBLIC_API_URL}/api/contactform`,
        headers: {
            'Content-Type': 'application/json',
        },
        data: data,
    };

    try {
        const response = await axios(config);
        return response;
    } catch (err: any) {
        console.log(err);
    }
};
