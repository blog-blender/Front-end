import React, { useState, useContext } from 'react';
import AppContext from "@/components/AppContext"

const AccountSettingsForm = () => {
    const appContext = useContext(AppContext)
    const [user, setUser] = useState(appContext.globalData);
    const [newFirstName, setNewFirstName] = useState('');
    const [newLastName, setNewLastName] = useState('');
    const [newUsername, setNewUsername] = useState('');
    const [newEmail, setNewEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const handleSaveChanges = (e) => {
        e.preventDefault();

        if (newPassword === user.password) {

            const updatedUser = {
                ...user,
                first_name: newFirstName,
                last_name: newLastName,
                user_name: newUsername,
                email: newEmail,
            };

            setUser(updatedUser);
            console.log('Changes saved:', updatedUser);
        } else {
            console.log('Incorrect password. Cannot save changes.');
        }
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
                                        <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>Profile Photo</label>
                                        <label htmlFor='user-photo' className='block w-full cursor-pointer'>
                                            <img
                                                className='w-full h-auto border border-gray-400 shadow-inner rounded-md cursor-pointer'
                                                src={user.user_photo}
                                                alt="User Photo"
                                                style={{ maxWidth: '200px', height: '200px' }}
                                            />
                                            <input
                                                id='user-photo'
                                                type='file'
                                                accept='image/*'
                                                className='hidden'
                                                onChange={(e) => handleImageUpload(e, 'user')}
                                            />
                                        </label>
                                    </div>
                                    <div className='w-full md:w-1/2 px-3 mb-6'>
                                        <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>Banner Photo</label>
                                        <label htmlFor='banner-photo' className='block w-full cursor-pointer'>
                                            <img
                                                className='w-full h-auto border border-gray-400 shadow-inner rounded-md cursor-pointer'
                                                src={user.banner}
                                                alt="Banner"
                                                style={{ maxWidth: '200px', height: '200px' }}
                                            />
                                            <input
                                                id='banner-photo'
                                                type='file'
                                                accept='image/*'
                                                className='hidden'
                                                onChange={(e) => handleImageUpload(e, 'banner')}
                                            />
                                        </label>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between mt-4">
                                    <div className='w-full md:w-1/2 px-3 mb-6'>
                                        <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' >New First Name</label>
                                        <input
                                            className='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500'
                                            type='text'
                                            value={newFirstName}
                                            placeholder={user.first_name}
                                            onChange={(e) => setNewFirstName(e.target.value)}
                                        />
                                    </div>

                                    <div className='w-full md:w-1/2 px-3 mb-6'>
                                        <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' >New Last Name</label>
                                        <input
                                            className='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500'
                                            type='text'
                                            value={newLastName}
                                            placeholder={user.last_name}
                                            onChange={(e) => setNewLastName(e.target.value)}
                                        />
                                    </div>



                                </div>
                                <div className="flex items-center justify-between mt-4">
                                    <div className='w-full md:w-1/2 px-3 mb-6'>
                                        <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' >New Userame</label>
                                        <input
                                            className='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500'
                                            type='text'
                                            value={newUsername}
                                            placeholder={user.user_name}
                                            onChange={(e) => setNewUsername(e.target.value)}
                                        />
                                    </div>
                                    <div className='w-full md:w-1/2 px-3 mb-6'>
                                        <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' >New Email</label>
                                        <input
                                            className='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500'
                                            type='text'
                                            value={newEmail}
                                            placeholder={user.email}
                                            onChange={(e) => setNewEmail(e.target.value)}
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

                                        />
                                    </div>
                                    <div className='w-full md:w-1/2 px-3 mb-6'>
                                        <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' >New Password</label>
                                        <input
                                            className='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500'
                                            type='password'
                                            value={newPassword}
                                            onChange={(e) => setNewPassword(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="flex justify-end">
                                    <button className="appearance-none bg-blue-300 text-gray-900 px-2 py-1 shadow-sm border border-gray-400 rounded-md mr-3" type="submit" onClick={handleSaveChanges} >Save Changes</button>
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
