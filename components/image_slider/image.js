import React, { useState } from 'react';
import Modal from 'react-modal';

const Photo = ({ photos }) => {
    // console.log(photos,"photot list");

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
    const [activeIndicator, setActiveIndicator] = useState(0);
    if (!photos) {
        return<></>
    }
    if (photos.length == 0) {
        return<></>
    }

    const openModal = (index) => {
        setIsModalOpen(true);
        setCurrentPhotoIndex(index);
        setActiveIndicator(index);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const goToPreviousPhoto = () => {
        if (currentPhotoIndex > 0) {
            setCurrentPhotoIndex(currentPhotoIndex - 1);
            setActiveIndicator(currentPhotoIndex - 1);
        }
    };

    const goToNextPhoto = () => {
        if (currentPhotoIndex < photos.length - 1) {
            setCurrentPhotoIndex(currentPhotoIndex + 1);
            setActiveIndicator(currentPhotoIndex + 1);
        }
    };

    return (
        <div className="flex flex-wrap">
            {photos.map((photo, index) => (
                <div
                    key={index}
                    className="w-1/4 p-2 cursor-pointer"
                    onClick={() => openModal(index)}
                >
                    <div className="w-full overflow-hidden rounded-lg shadow">
                        <img
                            className="object-contain  h-full"
                            src= {`${process.env.NEXT_PUBLIC_IMAGE_SERVER_URL}${photo.data}`} 
                            alt={`Photo ${index + 1}`}
                        />
                    </div>
                </div>
            ))}

            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                contentLabel="Photo Album"
                shouldCloseOnOverlayClick={true}
                style={{
                    overlay: {
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'rgba(112,128,144,0.8)',
                    },
                    content: {
                        border: 'none',
                        background: 'transparent',
                        padding: 0,
                        width: '50%',
                        height: '80vh',
                        inset: 'auto',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        overflow: 'hidden',
                        position: 'relative',
                    },
                }}
            >
                <button
                    className="absolute top-1/2 left-2 transform -translate-y-1/2 text-2xl rounded p-2"
                    onClick={goToPreviousPhoto}
                    style={{
                        fontSize: '55px',
                        color: 'blue',
                        padding: '8px 16px',
                    }}
                >
                    &lt;
                </button>
                <img
                    className="h-full w-auto"
                    style={{ maxHeight: '100vh', maxWidth: '100vw' }}
                    src={`${process.env.NEXT_PUBLIC_IMAGE_SERVER_URL}${photos[currentPhotoIndex].data}`}
                    alt={`Photo ${currentPhotoIndex + 1}`}
                />
                <button
                    className="absolute top-1/2 right-2 transform -translate-y-1/2 text-2xl rounded p-2"
                    onClick={goToNextPhoto}
                    style={{
                        fontSize: '55px',
                        color: 'blue',
                        padding: '8px 16px',
                    }}
                >
                    &gt;
                </button>

                <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                    {photos.map((_, index) => (
                        <div
                            key={index}
                            className={`w-2 h-2 mx-1 rounded-full ${
                                index === activeIndicator ? 'bg-blue-500' : 'bg-gray-300'
                            }`}
                            onClick={() => openModal(index)}
                        />
                    ))}
                </div>
            </Modal>
        </div>
    );
};

export default Photo;
