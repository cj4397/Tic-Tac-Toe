

let board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];

let player1_ = document.getElementById('player1_name_input')
let player2_ = document.getElementById('player2_name_input')

player1_.placeholder = 'Player 1'
player2_.placeholder = 'Player 2'

let player1 = "X"
let player2 = "O"

if (player1_.value === '') player1_.value = 'Player 1';
if (player2_.value === '') player2_.value = 'Player 2';

player1_.disabled = true
player2_.disabled = true
document.getElementById('display_player').innerText = `${player1_.value}  ${player1}`;

let rename_btn = document.getElementsByClassName('rename_btn')
let rename = document.getElementsByClassName('player_name')

for (const btn of rename_btn) {


    btn.addEventListener('click', (e) => {

        let x = e.target.dataset.target
        let edit = document.getElementById(x)
        edit.disabled = false


    });
}

for (const input of rename) {
    input.addEventListener('keydown', (event) => {

        if (event.keyCode === 13) {
            player1_.disabled = true
            player2_.disabled = true
        }
    })
}


let move_list = []
let num = 0

let currentPlayer = 'X';
let isGameActive = true;


for (let i = 0; i <= 8; i++) {
    let x = document.getElementById(`${i}_img`)
    x.src = `assets/images/img${i}.gif`
}


for (let i = 0; i <= 8; i++) {
    document.getElementById(i.toString()).addEventListener("click", (e) => {
        let id = e.target.parentNode.parentNode.parentNode.id
        try {
            if (isGameActive === true) {
                gives_value(id)
            } else { throw new Error('Game is Finished'); }

        } catch (error) {
            console.error(error);
        }
    })
}

function gives_value(id) {
    if (num < move_list.length) {
        move_list.splice(num, (move_list.length) - (num))
    }



    switch (true) {
        case id === '0' && board[0][0] === '':
            board[0][0] = currentPlayer;
            gives_name()

            move_list.push(moves(id, currentPlayer))
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            num++
            break;
        case id === '1' && board[1][0] === '':
            board[1][0] = currentPlayer
            gives_name()

            move_list.push(moves(id, currentPlayer))
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            num++
            break;
        case id === '2' && board[2][0] === '':
            board[2][0] = currentPlayer
            gives_name()

            move_list.push(moves(id, currentPlayer))
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            num++
            break;
        case id === '3' && board[0][1] === '':
            board[0][1] = currentPlayer
            gives_name()

            move_list.push(moves(id, currentPlayer))
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            num++
            break;
        case id === '4' && board[1][1] === '':
            board[1][1] = currentPlayer
            gives_name()

            move_list.push(moves(id, currentPlayer))
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            num++
            break;
        case id === '5' && board[2][1] === '':
            board[2][1] = currentPlayer
            gives_name()

            move_list.push(moves(id, currentPlayer))
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            num++
            break;
        case id === '6' && board[0][2] === '':
            board[0][2] = currentPlayer
            gives_name()

            move_list.push(moves(id, currentPlayer))
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            num++
            break;
        case id === '7' && board[1][2] === '':
            board[1][2] = currentPlayer
            gives_name()

            move_list.push(moves(id, currentPlayer))
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            num++
            break;
        case id === '8' && board[2][2] === '':
            board[2][2] = currentPlayer;
            gives_name()

            move_list.push(moves(id, currentPlayer))
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            num++
            break;

        default:
            alert(`can't be done`)
            console.log(id)
            console.log(board)
            break;
    }


    document.getElementById("undo").disabled = false;
    document.getElementById("next").disabled = false;
    show_value()


}

function show_value() {

    let tile0 = document.getElementById('0_value')
    let tile1 = document.getElementById('1_value')
    let tile2 = document.getElementById('2_value')
    let tile3 = document.getElementById('3_value')
    let tile4 = document.getElementById('4_value')
    let tile5 = document.getElementById('5_value')
    let tile6 = document.getElementById('6_value')
    let tile7 = document.getElementById('7_value')
    let tile8 = document.getElementById('8_value')

    if (move_list.length > 4) {
        switch (true) {
            case board[0][0] === "X" && board[0][1] === "X" && board[0][2] === "X":
                isGameActive = false;
                alert("end")
                break;
            case board[0][0] === "O" && board[0][1] === "O" && board[0][2] === "O":
                isGameActive = false;
                alert("end")
                break;
            case board[1][0] === "X" && board[1][1] === "X" && board[1][2] === "X":
                isGameActive = false;
                alert("end")
                break;
            case board[1][0] === "O" && board[1][1] === "O" && board[1][2] === "O":
                isGameActive = false;
                alert("end")
                break;
            case board[2][0] === "X" && board[2][1] === "X" && board[2][2] === "X":
                isGameActive = false;
                alert("end")
                break;
            case board[2][0] === "O" && board[2][1] === "O" && board[2][2] === "O":
                isGameActive = false;
                alert("end")
                break;
            case board[0][0] === "X" && board[1][0] === "X" && board[2][0] === "X":
                isGameActive = false;
                alert("end")
                break;
            case board[0][0] === "O" && board[1][0] === "O" && board[2][0] === "O":
                isGameActive = false;
                alert("end")
                break;
            case board[0][1] === "X" && board[1][1] === "X" && board[2][1] === "X":
                isGameActive = false;
                alert("end")
                break;
            case board[0][1] === "O" && board[1][1] === "O" && board[2][1] === "O":
                isGameActive = false;
                alert("end")
                break;
            case board[0][2] === "X" && board[1][2] === "X" && board[2][2] === "X":
                isGameActive = false;
                alert("end")
                break;
            case board[0][2] === "O" && board[1][2] === "O" && board[2][2] === "O":
                isGameActive = false;
                alert("end")
                break;
            case board[0][0] === "X" && board[1][1] === "X" && board[2][2] === "X":
                isGameActive = false;
                alert("end")
                break;
            case board[0][0] === "O" && board[1][1] === "O" && board[2][2] === "O":
                isGameActive = false;
                alert("end")
                break;
            case board[0][2] === "X" && board[1][1] === "X" && board[2][0] === "X":
                isGameActive = false;
                alert("end")
                break;
            case board[0][2] === "O" && board[1][1] === "O" && board[2][0] === "O":
                isGameActive = false;
                alert("end")
                break;
            case board[0][0] !== '' && board[0][1] !== '' && board[0][2] !== '' && board[1][0] !== '' && board[1][1] !== '' && board[1][2] !== '' && board[2][0] !== '' && board[2][1] !== '' && board[2][2] !== '':
                alert(`game tie`)
                break;
        }
    }

    tile0.innerText = board[0][0]
    tile1.innerText = board[1][0]
    tile2.innerText = board[2][0]
    tile3.innerText = board[0][1]
    tile4.innerText = board[1][1]
    tile5.innerText = board[2][1]
    tile6.innerText = board[0][2]
    tile7.innerText = board[1][2]
    tile8.innerText = board[2][2]

    for (let i = 0; i <= 8; i++) {
        document.getElementById(i.toString())

    }

    let empty_arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8']
    let mark_arr = [];


    for (let i = 0; i <= (num - 1); i++) {
        let x = document.getElementById(move_list[i].id)
        let y = document.getElementById(`${move_list[i].id}_value`)
        mark_arr.push(move_list[i].id)

        x.classList.add('flip')


        if (move_list[i].currentPlayer === 'X') {
            y.classList.add('playerX')
        } else {
            y.classList.add('playerO')
        }

    }


    let marked_empty = empty_arr.filter((items) => {
        return !mark_arr.includes(items)
    })

    for (const empty of marked_empty) {
        let x = document.getElementById(empty)
        let y = document.getElementById(`${empty}_value`)
        x.classList.remove('flip')
        y.classList.remove('playerX') || y.classList.remove('playerO')
    }


}

function undo_moves() {
    num--;
    isGameActive = true;
    if (num >= 0) {
        document.getElementById("next").disabled = false;
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        recreate()
        show_value()
        if (num === 0) {
            document.getElementById('display_player').innerText = `${player1_.value}(${player1})`;
            document.getElementById('display_player').classList.replace('playerO', 'playerX')
        }
    } else {
        num++
        document.getElementById("undo").disabled = true;
        alert(`it's already empty`)
    }
}

function next_moves() {
    num++;

    if (num <= move_list.length) {
        document.getElementById("undo").disabled = false;
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        recreate()
        show_value()
    } else {
        num--
        document.getElementById("next").disabled = true;
        alert('no more saved move')
    }
}

function reset() {
    move_list = [];
    board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];
    num = 0
    isGameActive = true;

    document.getElementById("undo").disabled = false;
    document.getElementById("next").disabled = false;
    show_value()
    currentPlayer = 'X';
    console.log(move_list)
}

function moves(id, currentPlayer) {
    return { id, currentPlayer }
}

function recreate() {
    let sample = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];

    for (let i = 0; i <= (num - 1); i++) {
        let id = move_list[i].id;
        let currentPlayer = move_list[i].currentPlayer;


        if (currentPlayer === 'X') {
            document.getElementById('display_player').innerText = `${player2_.value}  ${player2}`;
            document.getElementById('display_player').classList.replace('playerX', 'playerO')
        } else {
            document.getElementById('display_player').innerText = `${player1_.value}  ${player1}`;
            document.getElementById('display_player').classList.replace('playerO', 'playerX')
        };

        switch (true) {
            case id === '0':
                sample[0][0] = currentPlayer;

                break;
            case id === '1':
                sample[1][0] = currentPlayer
                break;
            case id === '2':
                sample[2][0] = currentPlayer
                break;
            case id === '3':
                sample[0][1] = currentPlayer
                break;
            case id === '4':
                sample[1][1] = currentPlayer
                break;
            case id === '5':
                sample[2][1] = currentPlayer
                break;
            case id === '6':
                sample[0][2] = currentPlayer
                break;
            case id === '7':
                sample[1][2] = currentPlayer
                break;
            case id === '8':
                sample[2][2] = currentPlayer;
                break;
        }
    }
    board = sample
}

function gives_name() {
    if (currentPlayer === 'X') {
        document.getElementById('display_player').innerText = `${player2_.value}  ${player2}`;
        document.getElementById('display_player').classList.replace('playerX', 'playerO')
    } else {
        document.getElementById('display_player').innerText = `${player1_.value}  ${player1}`;
        document.getElementById('display_player').classList.replace('playerO', 'playerX')
    };
}







