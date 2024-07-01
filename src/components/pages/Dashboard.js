import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import Sidebar from './CRUD/Sidebar';

function Dashboard() {
  const [requests, setRequests] = useState([]);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [currentRequest, setCurrentRequest] = useState(null);

  useEffect(() => {
    const mockData = [
      { id: 1, petName: 'Rex', userName: 'João', status: 'pending' },
      { id: 2, petName: 'Luna', userName: 'Maria', status: 'pending' },
      { id: 3, petName: 'Bella', userName: 'Carlos', status: 'pending' },
    ];

    const fetchRequests = async () => {
      try {
        // const response = await fetch('API_URL_TO_GET_REQUESTS');
        // const data = await response.json();
        // setRequests(data);

        // Usando dados fictícios para debug
        setRequests(mockData);
      } catch (error) {
        console.error('Erro ao buscar requisições:', error);
      }
    };
    fetchRequests();
  }, []);

  const handleAccept = async (id) => {
    try {
      // Simular requisição de atualização
      // const response = await fetch(`API_URL_TO_UPDATE_REQUEST/${id}`, {
      //   method: 'POST',
      //   body: JSON.stringify({ status: 'accepted' }),
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      // });
      // if (response.ok) {
      setRequests((prevRequests) =>
        prevRequests.map((r) =>
          r.id === id ? { ...r, status: 'accepted' } : r
        )
      );
      alert('Solicitação aceita com sucesso!');
      // }
    } catch (error) {
      console.error('Erro ao aceitar a solicitação:', error);
    }
  };

  const handleReject = async (id) => {
    try {
      // Simular requisição de atualização
      // const response = await fetch(`API_URL_TO_UPDATE_REQUEST/${id}`, {
      //   method: 'POST',
      //   body: JSON.stringify({ status: 'rejected' }),
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      // });
      // if (response.ok) {
      setRequests((prevRequests) =>
        prevRequests.map((r) =>
          r.id === id ? { ...r, status: 'rejected' } : r
        )
      );
      alert('Solicitação rejeitada com sucesso!');
      // }
    } catch (error) {
      console.error('Erro ao rejeitar a solicitação:', error);
    }
  };

  const handleEdit = (request) => {
    setCurrentRequest(request);
    setIsEditModalOpen(true);
  };

  const handleSaveEdit = () => {
    setRequests((prevRequests) =>
      prevRequests.map((r) =>
        r.id === currentRequest.id ? currentRequest : r
      )
    );
    setIsEditModalOpen(false);
    alert('Informações atualizadas com sucesso!');
  };

  const handleCloseEditModal = () => {
    setIsEditModalOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentRequest((prevRequest) => ({
      ...prevRequest,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="grid-container">
        <div className="sidebar">
          <Sidebar />
        </div>
        <header className="header">Painel de Controle de Adoções</header>
        <div className="main">
          {requests.length > 0 ? (
            requests.map((request) => (
              <div key={request.id} className="request-item">
                <p><strong>Pet:</strong> {request.petName}</p>
                <p><strong>Usuário:</strong> {request.userName}</p>
                <p><strong>Status:</strong> {request.status}</p>
                <div className="button-container">
                  <button onClick={() => handleAccept(request.id)} className="accept-button">Aceitar</button>
                  <button onClick={() => handleReject(request.id)} className="reject-button">Rejeitar</button>
                  <button onClick={() => handleEdit(request)} className="edit-button">Editar</button>
                </div>
              </div>
            ))
          ) : (
            <p>Nenhuma solicitação de adoção no momento.</p>
          )}
        </div>
      </div>

      {isEditModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseEditModal}>&times;</span>
            <h2>Editar Solicitação</h2>
            <div className="inputContainer">
              <label>Nome do Pet</label>
              <input
                type="text"
                name="petName"
                value={currentRequest.petName}
                onChange={handleChange}
              />
            </div>
            <div className="inputContainer">
              <label>Nome do Usuário</label>
              <input
                type="text"
                name="userName"
                value={currentRequest.userName}
                onChange={handleChange}
              />
            </div>
            <div className="inputContainer">
              <label>Status</label>
              <select
                name="status"
                value={currentRequest.status}
                onChange={handleChange}
              >
                <option value="pending">Pendente</option>
                <option value="accepted">Aceito</option>
                <option value="rejected">Rejeitado</option>
              </select>
            </div>
            <button onClick={handleSaveEdit} className="save-button">Salvar</button>
          </div>
        </div>
      )}
    </>
  );
}

export default Dashboard;
