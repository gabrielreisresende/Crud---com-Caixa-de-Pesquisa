// Carrega os dados do arquivo JSON
let data = [];
if (localStorage.getItem('myData')) {
	data = JSON.parse(localStorage.getItem('myData'));
}

// Função para exibir os dados na página
function showData() {
	let output = document.getElementById('output');
	output.innerHTML = '<h2>Dados Salvos</h2>';
	
	if (data.length > 0) {
		let table = '<table><tr><th>Nome</th><th>Idade</th><th>Ação</th></tr>';
		
		for (let i = 0; i < data.length; i++) {
			table += '<tr><td>' + data[i].name + '</td><td>' + data[i].age + '</td><td><button onclick="editData(' + i + ')">Editar</button> <button onclick="deleteData(' + i + ')">Excluir</button></td></tr>';
		}
		
		table += '</table>';
		output.innerHTML += table;
	} else {
		output.innerHTML += '<p>Nenhum dado salvo ainda.</p>';
	}
}

// Função para salvar os dados do formulário
function saveData(event) {
	event.preventDefault();
	
	let name = document.getElementById('name').value;
	let age = document.getElementById('age').value;
	
	if (name != '' && age != '') {
		let newData = { name: name, age: age };
		data.push(newData);
		
		// Salva os dados no arquivo JSON
		localStorage.setItem('myData', JSON.stringify(data));
		
		showData();
	} else {
		alert('Por favor, preencha todos os campos.');
	}
}

// Função para editar os dados
function editData(index) {
	let name = prompt('Digite um novo nome:', data[index].name);
	let age = prompt('Digite uma nova idade:', data[index].age);
	
	if (name != null && age != null) {
		data[index].name = name;
		data[index].age = age;
		
		// Salva os dados no arquivo JSON
		localStorage.setItem('myData', JSON.stringify(data));
		
		showData();
	}
}

// Função para excluir os dados
function deleteData(index) {
	if (confirm(`Tem certeza que deseja excluir ${data[index].name}?`)) {
		data.splice(index, 1);
		
		// Salva os dados no arquivo JSON
		localStorage.setItem('myData', JSON.stringify(data));
		
		showData();
	}
}

// Função para pesquisar os dados
function searchData(){

}

// Exibe os dados na página
showData();

// Adiciona o evento "submit" ao formulário para salvar os dados
document.getElementById('myForm').addEventListener('submit', saveData);
document.getElementById('myForm').addEventListener('button', searchData);



// Caixa de Busca
const INPUT_BUSCA = document.getElementById('input-busca');
const OUTPUT= document.getElementById('output');

INPUT_BUSCA.addEventListener('keyup', function() {
    let pesquisa = INPUT_BUSCA.value.toLowerCase();

    let linhas = OUTPUT.getElementsByTagName('tr');

    for (let posicao in linhas) {
        if (true === isNaN(posicao)) {
            continue;
        }

        let conteudoDaLinha = linhas[posicao].innerHTML.toLowerCase();

        if (true === conteudoDaLinha.includes(pesquisa)) {
            linhas[posicao].style.display = '';
        } else {
            linhas[posicao].style.display = 'none';
        }
    }
});