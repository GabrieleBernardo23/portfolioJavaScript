alert("Olá, bem-vindo ao meu portfólio!!");

// --------------------------------------------------------------------

function mostrarFormulario() {
    let formulario = document.getElementById('formulario');
    if (formulario.style.display === 'none' || formulario.style.display === '') {
      formulario.style.display = 'block'; 
    } else {
      formulario.style.display = 'none'; 
    }
}


function enviarFeedback() {
    let nome = document.getElementById('name').value.trim();
    let comentario = document.getElementById('comentario').value.trim();

    if (nome && comentario) {
      alert(`Obrigado pelo feedback, ${nome}! Visualize seu feedback: "${comentario}"`);
      document.getElementById('name').value = ''; 
      document.getElementById('comentario').value = ''; 
      document.getElementById('formulario').style.display = 'none'; 
    } else {
      alert('Por favor, preencha todos os campos antes de enviar.');
    }
}
