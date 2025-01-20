import React, { useEffect, useState } from 'react';
import { Modal } from "react-bootstrap";

const ProjectModal = ({ show, handleClose, projectData }) => {
    const [projectsModal, setProjectsModal] = useState([]);

    useEffect(() => {
        fetch("/fackDb.json")
            .then((res) => res.json())
            .then((data) => setProjectsModal(data));  // Setting the fetched data
    }, []);

    // Find the selected project from the fetched projectsModal based on the id in projectData
    const selectedProject = projectsModal.find(project => project.id === projectData?.id);

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
                    <Modal.Title>{selectedProject?.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body
                    style={{ background: '#1e2024' }}
                    className='text-light'
                >
                    Features:
                    <ul style={{ padding: 0 }}>
                        <li style={{
                            listStyle: 'none',
                            marginBottom: '20px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '15px',
                            borderRadius: '8px',
                            padding: '20px',
                            backgroundColor: '#2c3034',
                            boxShadow: '0 4px 6px rgba(0,0,0,0.2)',
                        }}>
                            <div style={{ color: '#f4b400', fontSize: '16px', fontWeight: 'bold' }}>
                                Description:
                            </div>
                            <p style={{ color: '#ddd', fontSize: '14px' }}>
                                {selectedProject?.description}
                            </p>

                            <div style={{ color: '#f4b400', fontSize: '16px', fontWeight: 'bold' }}>
                                Tools:
                            </div>
                            <p style={{ color: '#ddd', fontSize: '14px' }}>
                                {selectedProject?.tools}
                            </p>
                        </li>
                    </ul>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default ProjectModal;
