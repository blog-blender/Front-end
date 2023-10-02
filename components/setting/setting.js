import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AccountSettingsForm = (props) => {
  const [initialData, setUserDatail] = useState(props.initialData);
  const [settingImages, setSettingImages] = useState({
    upload: { banner: null, profilePic: null },
    display: { banner: initialData.banner, profilePic: initialData.profilePic },
  });
  
  const urlToFile = async (url) => {
    if (url) {
      let response = await fetch(`${process.env.NEXT_PUBLIC_IMAGE_SERVER_URL}${url}`);
      let blob = await response.blob();
      let resFile = new File([blob], `image.${blob.type.split("/")[1]}`, { type: blob.type })
      return resFile
    }
    return null
  };

  async function setup() {
    let temp = { ...settingImages }
    temp.upload.banner = await urlToFile(temp.display.banner)
    temp.upload.profilePic = await urlToFile(temp.display.profilePic)

    setSettingImages(temp);
  }

  useEffect(() => {
    setup()
  }, [])

  const imageChangeHandeler = (event) => {
    const uploadedImage = event.target.files[0];
    if (!uploadedImage)
      return
    const imageUrl = URL.createObjectURL(uploadedImage);
    let temp = { ...settingImages }
    temp.upload[event.target.id] = uploadedImage
    temp.display[event.target.id] = imageUrl
    setSettingImages(temp);
    // console.log(event.target.id);
  }

  const textChangeHandler = (event) => {
    const temp = { ...initialData }
    temp[event.target.id] = event.target.value
    setUserDatail(temp)
    // console.log(event.target.value, event.target.value, "ext change");
  };

  const submitHandeler = (event) => {
    event.preventDefault();
    let url, payload, method
    const formData = new FormData();

    const config = {
      headers: {
        Authorization: `Bearer ${props.AuthData.token.access}`,
      },
    };


    method = "put"
    url = `${process.env.NEXT_PUBLIC_BACKEND_URL}api/v1/accounts/update`
    payload = {
      userName: initialData.userName,
      firstName: initialData.firstName,
      lastName: initialData.lastName,
      profilePic: settingImages.upload.profilePic,
      banner: settingImages.upload.banner,
      email: initialData.email,
      password: initialData.password,
    }
    // console.log(settingImages.upload.profilePic);
    // config.params = {blog_id:props.initialData.id}


    // console.log(payload.userName);
    formData.append("username", payload.userName);
    formData.append("first_name", payload.firstName);
    formData.append("last_name", payload.lastName);
    formData.append("email", payload.email);
    formData.append("user_banner_pic", payload.banner);
    formData.append("profile_pic", payload.profilePic);
    payload.password?formData.append("password", payload.password):null;

    axios[method](url, formData, config)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div className="bg-gray-200 min-h-screen rounded-lg font-mono my-1">
      <div className="container mx-auto">
        <div className="inputs w-full max-w-2xl p-6 mx-auto">
          <div className="text-center mb-6">
            <label className="text-4xl font-medium leading-5 text-indigo-900">
              Personal Info:
            </label>
          </div>
          <form className="border-t border-gray-400 pt-4">
            <div className='flex flex-wrap -mx-3 mb-6'>
              <div className="personal w-full border-gray-400 pt-4">
                <div className="flex items-center justify-between mt-4">
                  <div className="w-full md:w-1/2 px-3 mb-6">
                    <label htmlFor="content" className="block text-2xl font-medium leading-5 text-primary-100 py-2">
                      Profile Photo:
                    </label>
                    <div className="relative">

                      <img
                        className="w-full h-auto border border-gray-400 shadow-inner rounded-md cursor-pointer max-w-[200px] h-[200px]"
                        src={`${(!settingImages.display.profilePic?.includes(window.location.hostname))?process.env.NEXT_PUBLIC_IMAGE_SERVER_URL:""}${settingImages.display.profilePic}`}
                        alt=""
                      />
                      
                      <label htmlFor="profilePic" className="block w-20 cursor-pointer bg-indigo-900 text-white rounded-md px-3 py-1 mt-2 hover:bg-indigo-700">
                        Upload
                      </label>
                      <input
                        id="profilePic"
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={imageChangeHandeler}
                      />
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 px-3 mb-6">
                    <label htmlFor="content" className="block text-2xl font-medium leading-5 text-primary-100 py-2">
                      Banner Photo:
                    </label>
                    <div className="relative">
                      <img
                        className="w-full h-auto border border-gray-400 shadow-inner rounded-md cursor-pointer max-w-[200px] h-[200px]"
                        src={`${(!settingImages.display.banner?.includes(window.location.hostname))?process.env.NEXT_PUBLIC_IMAGE_SERVER_URL:""}${settingImages.display.banner}`}
                        alt=""
                      />
                      
                      <label htmlFor="banner" className="block w-20 cursor-pointer bg-indigo-900 text-white rounded-md px-3 py-1 mt-2 hover:bg-indigo-700">
                        Upload
                      </label>
                      <input
                        id="banner"
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={imageChangeHandeler}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <div className='w-full md:w-1/2 px-3 mb-6'>
                    <label htmlFor="content" className="block text-2xl font-medium leading-5 text-primary-100 py-2">
                      First Name:
                    </label>
                    <input
                      className='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500'
                      type='text'
                      value={initialData.firstName}
                      onChange={textChangeHandler}
                      id='firstName'
                    />
                  </div>
                  <div className='w-full md:w-1/2 px-3 mb-6'>
                    <label htmlFor="content" className="block text-2xl font-medium leading-5 text-primary-100 py-2">
                      Last Name:
                    </label>
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
                    <label htmlFor="content" className="block text-2xl font-medium leading-5 text-primary-100 py-2">
                      Username:
                    </label>
                    <input
                      className='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500'
                      type='text'
                      onChange={textChangeHandler}
                      id='userName'
                      value={initialData.userName}
                    />
                  </div>
                  <div className='w-full md:w-1/2 px-3 mb-6'>
                    <label htmlFor="content" className="block text-2xl font-medium leading-5 text-primary-100 py-2">
                      Email:
                    </label>
                    <input
                      className='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500'
                      type='text'
                      value={initialData.email}
                      onChange={textChangeHandler}
                      id='email'
                    />
                  </div>
                </div>
                
                <div className="mt-[4%] flex justify-center">
                  <button
                    onClick={submitHandeler}
                    type="submit"
                    className="bg-indigo-900 text-white py-3 px-6 rounded-lg hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 text-lg"
                  >
                    Save
                  </button>
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
