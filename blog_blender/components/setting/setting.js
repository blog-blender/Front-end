import React, { useState, useContext } from 'react';
import { user_data } from '@/data_samples/user_data';
import axios from 'axios';

const AccountSettingsForm = (props) => {
    const [initialData, setUserDatail] = useState(props.initialData);
    const [settingImages, setSettingImages] = useState({
        upload:{banner:null,profilePic:null},
        display:{banner:initialData.banner,profilePic:initialData.profilePic},
    });
    
    const imageChangeHandeler = (event) => {
        const uploadedImage = event.target.files[0];
        if(!uploadedImage)
            return
        const imageUrl = URL.createObjectURL(uploadedImage);
        let temp = {...settingImages}
        temp.upload[event.target.id] = uploadedImage
        temp.display[event.target.id] = imageUrl
        setSettingImages(temp);
        console.log(event.target.id);
    }

    const imageDiscardHandler = (event) =>{
        const deletedImageId = event.target.id
        let temp = {...settingImages}
        temp.upload[deletedImageId] = null
        temp.display[deletedImageId] = props.initialData[deletedImageId]
        setSettingImages(temp)
    }

    const textChangeHandler = (event) => {
        const temp = {...initialData}
        temp[event.target.id] = event.target.value
        setUserDatail(temp)
        console.log(event.target.value,event.target.value,"ext change");
      };

    const submitHandeler = (event) => {
        event.preventDefault();
        let url,payload,method
        const formData = new FormData();
    
        const config = {
          headers: {
            Authorization : `Bearer ${props.AuthData.token.access}`,
          },
        };
    
        
        method = "put"
        url = `http://127.0.0.1:8000/api/v1/accounts/update`
        payload ={
        userName: initialData.userName,
        firstName: initialData.firstName,
        lastName: initialData.lastName,
        profilePic: settingImages.upload.profilePic,
        banner: settingImages.upload.banner,
        email: initialData.email,
        password: initialData.password,
        }
        console.log(settingImages.upload.profilePic);
        // config.params = {blog_id:props.initialData.id}
        

        console.log(payload.userName);
        formData.append("username", payload.userName);
        formData.append("first_name", payload.firstName);
        formData.append("last_name", payload.lastName);
        formData.append("email", payload.email);
        formData.append("user_banner_pic", payload.banner);
        formData.append("profile_pic", payload.profilePic);
        formData.append("password", payload.profilePic);
        
        axios[method](url, formData, config)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    };
    return (
        <div className="bg-gray-200 min-h-screen pt-2 font-mono my-16">
            <div className="container mx-auto">
                <div className="inputs w-full max-w-2xl p-6 mx-auto">
                    <h2 className="text-2xl text-gray-900">Personal info:</h2>
                    <form className="mt-6 border-t border-gray-400 pt-4">
                        <div className='flex flex-wrap -mx-3 mb-6'>
                            <div className="personal w-full border-gray-400 pt-4">
                                <div className="flex items-center justify-between mt-4">
                                    <div className='w-full md:w-1/2 px-3 mb-6'>
                                        
                                            <span onClick={imageDiscardHandler} id='profilePic'>X</span>
                                        <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>Profile Photo</label>
                                        <label htmlFor='profilePic' className='block w-full cursor-pointer'>
                                            <input
                                                id='profilePic'
                                                type='file'
                                                accept='image/*'
                                                // className='hidden'
                                                onChange={imageChangeHandeler}
                                            />
                                            <img
                                                className='w-full h-auto border border-gray-400 shadow-inner rounded-md cursor-pointer'
                                                src={settingImages.display.profilePic}
                                                alt="User Photo"
                                                style={{ maxWidth: '200px', height: '200px' }}
                                            />
                                        </label>
                                    </div>
                                        <span id='banner' onClick={imageDiscardHandler}>X</span>
                                    <div className='w-full md:w-1/2 px-3 mb-6'>
                                        <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>Banner Photo</label>
                                        <label htmlFor='banner' className='block w-full cursor-pointer'>
                                            <img
                                                className='w-full h-auto border border-gray-400 shadow-inner rounded-md cursor-pointer'
                                                src={settingImages.display.banner}
                                                alt="Banner"
                                                style={{ maxWidth: '200px', height: '200px' }}
                                            />
                                            <input
                                                id='banner'
                                                type='file'
                                                accept='image/*'
                                                // className='hidden'
                                                onChange={imageChangeHandeler}
                                            />
                                        </label>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between mt-4">
                                    <div className='w-full md:w-1/2 px-3 mb-6'>
                                        <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' >First Name</label>
                                        <input
                                            className='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500'
                                            type='text'
                                            value={initialData.firstName}
                                            onChange={textChangeHandler}
                                            id='firstName'
                                        />
                                    </div>

                                    <div className='w-full md:w-1/2 px-3 mb-6'>
                                        <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' >Last Name</label>
                                        <input
                                            className='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500'
                                            type='text'
                                            value={initialData.lastName}
                                            onChange={textChangeHandler}
                                            id='lastName'
                                        />
                                    </div>



                                </div>
                                <div className="flex items-center justify-between mt-4">
                                    <div className='w-full md:w-1/2 px-3 mb-6'>
                                        <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' >Userame</label>
                                        <input
                                            className='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500'
                                            type='text'
                                            // value={initialData.username}
                                            onChange={textChangeHandler}
                                            id='userName'
                                        />
                                    </div>
                                    <div className='w-full md:w-1/2 px-3 mb-6'>
                                        <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' >Email</label>
                                        <input
                                            className='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500'
                                            type='text'
                                            value={initialData.email}
                                            onChange={textChangeHandler}
                                            id='email'
                                        />
                                    </div>
                                </div>
                                <div className="flex items-center justify-between mt-4">


                                </div>
                                <div className="flex items-center justify-between mt-4">
                                    <div className='w-full md:w-full px-3 mb-6'>
                                        <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>fav language</label>
                                        <div className="flex-shrink w-full inline-block relative">
                                            <select className="block appearance-none text-gray-600 w-full bg-white border border-gray-400 shadow-inner px-4 py-2 pr-8 rounded">
                                                <option>choose ...</option>
                                                <option>English</option>
                                                <option>France</option>
                                                <option>Spanish</option>
                                            </select>
                                            <div className="pointer-events-none absolute top-0 mt-3  right-0 flex items-center px-2 text-gray-600">
                                            </div>
                                        </div>
                                    </div>
                                    <div className='w-full md:w-full px-3 mb-6'>
                                        <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>pick your country</label>
                                        <div className="flex-shrink w-full inline-block relative">
                                            <select className="block appearance-none text-gray-600 w-full bg-white border border-gray-400 shadow-inner px-4 py-2 pr-8 rounded">
                                                <option>choose ...</option>
                                                <option>USA</option>
                                                <option>France</option>
                                                <option>Spain</option>
                                                <option>UK</option>
                                            </select>
                                            <div className="pointer-events-none absolute top-0 mt-3  right-0 flex items-center px-2 text-gray-600">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between mt-4">
                                    <div className='w-full md:w-1/2 px-3 mb-6'>
                                        <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' >Password</label>
                                        <input
                                            className='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500'
                                            type='password'
                                            required
                                            onChange={textChangeHandler}
                                        />
                                    </div>
                                    <div className='w-full md:w-1/2 px-3 mb-6'>
                                        <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' >New Password</label>
                                        <input
                                            className='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500'
                                            type='password'
                                            // value={newPassword}
                                            onChange={(e) => setNewPassword(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="flex justify-end">
                                    <button className="appearance-none bg-blue-300 text-gray-900 px-2 py-1 shadow-sm border border-gray-400 rounded-md mr-3" type="submit" onClick={submitHandeler} >Save Changes</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AccountSettingsForm;
