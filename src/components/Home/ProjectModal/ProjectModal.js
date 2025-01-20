import React from 'react';
import { Modal } from "react-bootstrap";

const ProjectModal = ({ show, handleClose, projectData }) => {

    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                className="py-5 model-responsive"
                centered
                animation={false}

            >
                <Modal.Header closeButton
                    style={{ background: '#a8adb4' }}
                >
                    <Modal.Title>{projectData?.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body
                    style={{ background: '#1e2024' }}
                    className='text-light'
                >
                    Features:
                    <ul>
                       
                    </ul>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default ProjectModal;