import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import { useEffect, useState } from 'react';
import * as ImagePicker from 'react-native-image-picker';
import { Platform } from 'react-native';
import { firebase as storage } from '@react-native-firebase/storage';

const useProfile = () => {
    const [informationUser, setInformationUser] = useState([]);
    const [loading, setLoading] = useState(true)
    const user = auth().currentUser.uid;
    const [picProfile, setPicProfile] = useState(auth().currentUser.photoURL)

    useEffect(() => {
        const result = consumeInformation()
        return result;
    }, [])


    const selectPhotoTapped = async () => {
        let options = {
            title: 'Select Image',
            customButtons: [
                { name: 'customOptionKey', title: 'Choose Photo from Custom Option' },
            ],
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };
        ImagePicker.launchImageLibrary(options, (response) => {
            //console.log('Response = ', response.uri);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
                alert(response.customButton);
            } else {
                getPic(response.assets[0].uri)
                // const source = { uri: response.uri };
                //console.log('response', JSON.stringify(response));

                console.log(response.assets[0].uri);

            }
        });
    }

    const getPic = async (uri) => {
        const filename = uri.substring(uri.lastIndexOf('/') + 1);
        const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri;
        console.log('uploadUri', uploadUri);
        const task = storage.storage().ref(`avatar/${user}/${filename}`);

        try {

            await task.putFile(uploadUri);
            const url = await task.getDownloadURL();
            console.log('-> ', url);
            const update = {
                photoURL: url,
            };
            updatePic(url)
            await auth().currentUser.updateProfile(update)
            setPicProfile(auth().currentUser.photoURL)
        } catch (e) {
            console.error(e);
        }
    };

    const updatePic = (url) => {
        database()
            .ref(`/Usuarios/${user}`)
            .update({
                picProfile: url,
            })
            .then(() => console.log('Data updated.'));
    }

    // Update information db = 

    const updateInformation = (values) => {
        database()
            .ref(`/Usuarios/${user}`)
            .update({
                name: values.name,
                lastName: values.lastName,
                gender: values.gender,
                dBirth: values.dBirth,
            })
            .then(() => console.log('Data updated.'));
    }
    const startLoading = () => {
        setTimeout(() => {
            setLoading(false);
            //console.log(informationUser);
        }, 1000);
    }

    const consumeInformation = () => {
        //console.log('adf');
        database()
            .ref(`/Usuarios/${user}`)
            .on('value', snapshot => {
                setInformationUser(snapshot.val());
                // console.log('User data: ', snapshot.val());
            });

    }

    return {
        consumeInformation,
        informationUser,
        loading,
        selectPhotoTapped,
        picProfile,
        updateInformation,
        startLoading,
    }
}

export default useProfile
