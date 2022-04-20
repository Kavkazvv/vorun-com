export default class GameView {
    constructor(root) {
        this.root = root;
        this.root.innerHTML = `
            <div><button>Restart</button><div>
            <div class="board">
                <table>
                    <tr>
                        <td><div class="board_tile" data-index="0">0</div></td>
                        <td><div class="board_tile" data-index="1">0</div></td>
                        <td><div class="board_tile" data-index="2">0</div></td>
                    </tr>
                    <tr>
                        <td><div class="board_tile" data-index="3">0</div></td>
                        <td><div class="board_tile" data-index="4">0</div></td>
                        <td><div class="board_tile" data-index="5">0</div></td>
                    </tr>
                    <tr>
                        <td><div class="board_tile" data-index="6">0</div></td>
                        <td><div class="board_tile" data-index="7">0</div></td>
                        <td><div class="board_tile" data-index="8">0</div></td>
                    </tr>
                </table>
            </div>
        `;

        this.onTileClick = (index) => { console.log(index); };
        this.onRestartClick = () => {};

        this.root.querySelectorAll(".board_tile").forEach(tile => {
            tile.onclick = () => {
                this.onTileClick(tile.dataset.index);
            };
            // tile.addEventListener("click", () => {
            //     this.onTileClick(tile.dataset.index);
            // });
        });
    }
}

{

    async function checkMail2() {
        return new Promise((resolve, reject)=>{
            // if(Math.random() > 0.5) {
                resolve({success: true});
            // } else {
            //     reject({success:false});
            // }
        });
    } 

// mvc --> model/view/controller

    async function run() {
        // Your async code here
        const response = await fetch("https://api.punkapi.com/v2/beers");
        const data = await response.json();
        return data;
    }

    try {
        console.log(await run());
    } catch(error) {
        console.log('here', error)
    }
    
    // let res = await checkMail2();
    // console.log(res, 'here');
    //
    // Seattle / Bellevue
    //

    //Design full stack 
    //API ex
    //design email server
    // 1 system design
    // 2 coding

    function checkMail() {
        return new Promise((resolve, reject)=>{
            resolve({success: true});
            if(Math.random() > 0.5) {
                resolve({success: true});
            } else {
                reject({success:false});
            }
        });
    }

    function doSomethingElse(res) {
        console.log('doSomethingElseZX', res)
    }
    
    checkMail()
        .then(doSomethingElse);
    
    

    // checkMail()
    //     .then((res)=>{
    //         console.log(res);
    //     })
    //     .catch((error)=>{
    //         console.log(error, 'here');
    //     })
    //     .finally(()=>{
    //         console.log('finally');
    //     });


    // Promise.all([checkMail(), checkMail()])
    //     .then((res)=>{
    //         console.log(res);
    //     })
    //     .finally(()=>{
    //         console.log('finally');
    //     });
    
}