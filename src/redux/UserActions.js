import {
    successSign,
    failedSign,
    successLogin,
    failedLogin,
    successLogout,
    successDelete,
    failedDelete,
    failedUpdate,
    successUpdate,
    requestUpdate
} from "./UserSlicers"
import axios from "axios"
import Swal from 'sweetalert2';

export const signup = async (payload, dispatch, endPoint) => {

    try {
        const res = await axios.post('https://gorest.co.in/public/v2/users', payload, {
            headers: {
                Authorization: `Bearer 64e77fdb1d184f316659a0f4d598b02361a65ce125a10b55eb147a57565d37e8`,
            },
        });
        localStorage.setItem('user', JSON.stringify(res.data));
        dispatch(successSign(res.data));
        Swal.fire({
            icon: 'success',
            title: `Welcome ${res.data.name}`,
            text: 'Sign Up Successfully!',
            showConfirmButton: false,
            timer: 3500,
        });
        endPoint('/home');
    } catch (err) {
        dispatch(failedSign(err.message));
        Swal.fire({
            icon: 'error',
            title: 'Signup Failed',
            text: 'Please try again',
            showConfirmButton: false,
            timer: 3500,
        });
    }
};



export const login = (payload, dispatch, endPoint) => {

    axios.get(`https://gorest.co.in/public/v2/users/${payload.id}`, {
        headers: {
            Authorization: `Bearer 64e77fdb1d184f316659a0f4d598b02361a65ce125a10b55eb147a57565d37e8`,
        },
    }).then(res => {
        localStorage.setItem('user', JSON.stringify(res.data))
        dispatch(successLogin(res.data))
        Swal.fire({
            icon: 'success',
            title: `Welcome ${res.data.name}`,
            text: 'LogIn Successfully!',
            showConfirmButton: false,
            timer: 3500,
        });
        endPoint('/home');


    }).catch(err => {

        dispatch(failedLogin(err.message))
        Swal.fire({
            icon: 'error',
            title: 'LogIn Failed',
            text: 'Please try again or You can SignUp',
            showConfirmButton: false,
            timer: 3500,
        });
    })



}

export const logout = (dispatch, endPoint) => {
    dispatch(successLogout());
    localStorage.removeItem('user');
    Swal.fire({
        icon: 'success',
        title: 'Logout Successful',
        text: 'See you next time!',
        showConfirmButton: false,
        timer: 3500,
    });
    endPoint('/');
};

export const getUser = (payload, dispatch) => {

    axios.get(`https://gorest.co.in/public/v2/users/${payload}`, {
        headers: {
            Authorization: `Bearer 64e77fdb1d184f316659a0f4d598b02361a65ce125a10b55eb147a57565d37e8`,
        },
    }).then(res => {
        localStorage.setItem('user', JSON.stringify(res.data))
        dispatch(successLogin(res.data))
    }).catch(err => {
        dispatch(failedLogin(err.message))
    })
    
}



export const deleteUser = (payload, dispatch, endPoint) => {
    console.log("hi");

    axios.delete(`https://gorest.co.in/public/v2/users/${payload.id}`,
        {
            headers: {
                Authorization: `Bearer 64e77fdb1d184f316659a0f4d598b02361a65ce125a10b55eb147a57565d37e8`,
            },
        }).then(res => {
            localStorage.removeItem('userData');
            dispatch(successDelete());
            Swal.fire({
                icon: 'success',
                title: 'Delete Successful',
                text: 'Your profile has been deleted',
                showConfirmButton: false,
                timer: 3500,
            });
            endPoint('/');


        }).catch(err => {
            dispatch(failedDelete(err.message));
            Swal.fire({
                icon: 'error',
                title: 'Delete Failed',
                text: 'Please try again',
                showConfirmButton: false,
                timer: 3500,
            });

        })
};



export const updateUser = (payload, dispatch) => {
    dispatch(requestUpdate());

    axios.patch(`https://gorest.co.in/public/v2/users/${payload.id}`, payload,
        {
            headers: {
                Authorization: `Bearer 64e77fdb1d184f316659a0f4d598b02361a65ce125a10b55eb147a57565d37e8`,
            },
        }).then(res => {


            localStorage.setItem('user', JSON.stringify(res.data));
            console.log(res.data)
            dispatch(successUpdate(res.data));
            Swal.fire({
                icon: 'success',
                title: 'Update Successful',
                text: 'Your profile has been updated',
                showConfirmButton: false,
                timer: 3000,
            });


        }).catch(err => {
            dispatch(failedUpdate(err.message));
            Swal.fire({
                icon: 'error',
                title: 'Update Failed',
                text: 'Please try again',
                showConfirmButton: false,
                timer: 3000,
            });


        })


};