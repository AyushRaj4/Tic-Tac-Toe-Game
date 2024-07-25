let counter = 1, flag = false;
const children = document.querySelectorAll(".children");
let mat = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];
let p1 = 0, p2 = 0;
const sec1Span = document.querySelector("#sec1").children[0];
const sec3Span = document.querySelector("#sec3").children[0];

for (let i = 0; i < children.length; i++) {
    children[i].addEventListener("click", function (event) {
        if (flag) return;

        if (this.innerText === "") {
            if (counter % 2)
                this.innerText = "X";
            else
                this.innerText = "O";
            counter++;

            if (i >= 0 && i <= 2)
                mat[0][i % 3] = children[i];
            else if (i >= 3 && i <= 5)
                mat[1][i % 3] = children[i];
            else
                mat[2][i % 3] = children[i];
            console.log(mat);
        }

        const h1 = document.querySelector("h1");
        if (counter >= 6) {
            let j;
            for (j = 0; j < 3; j++) {
                let k;
                for (k = 1; k < 3; k++)
                    if (mat[j][k] === null || mat[j][k - 1] === null || mat[j][k].innerText !== mat[j][k - 1].innerText)
                        break;
                if (k == 3) {
                    flag = true;
                    if (mat[j][k - 1].innerText === "X") {
                        h1.innerText = "Player 1 wins";
                        p1++;
                        sec1Span.innerText = ` ${p1}`;
                        break;
                    }
                    else {
                        h1.innerText = "Player 2 wins";
                        p2++;
                        sec3Span.innerText = ` ${p2}`;
                        break;
                    }
                }
            }

            for (j = 0; j < 3; j++) {
                let k;
                for (k = 1; k < 3; k++)
                    if (mat[k][j] === null || mat[k - 1][j] === null || mat[k][j].innerText !== mat[k - 1][j].innerText)
                        break;
                if (k == 3) {
                    flag = true;
                    if (mat[k - 1][j].innerText === "X") {
                        h1.innerText = "Player 1 wins";
                        p1++;
                        sec1Span.innerText = ` ${p1}`;
                        break;
                    }
                    else {
                        h1.innerText = "Player 2 wins";
                        p2++;
                        sec3Span.innerText = ` ${p2}`;
                        break;
                    }
                }
            }

            if (flag) return;

            if (mat[0][0] !== null && mat[1][1] !== null && mat[2][2] !== null && mat[0][0].innerText === mat[1][1].innerText && mat[1][1].innerText === mat[2][2].innerText) {
                flag = true;
                if (mat[0][0].innerText === "X") {
                    h1.innerText = "Player 1 wins";
                    p1++;
                    sec1Span.innerText = ` ${p1}`;
                }
                else {
                    h1.innerText = "Player 2 wins";
                    p2++;
                    sec3Span.innerText = ` ${p2}`;
                }
            }

            if (mat[0][2] !== null && mat[1][1] !== null && mat[2][0] !== null && mat[0][2].innerText === mat[1][1].innerText && mat[1][1].innerText === mat[2][0].innerText) {
                flag = true;
                if (mat[0][2].innerText === "X") {
                    h1.innerText = "Player 1 wins";
                    p1++;
                    sec1Span.innerText = ` ${p1}`;
                }
                else {
                    h1.innerText = "Player 2 wins";
                    p2++;
                    sec3Span.innerText = ` ${p2}`;
                }
            }

            if (counter === 10 && flag === false)
                h1.innerText = "Draw";
        }
    })
}

document.querySelector("button").addEventListener("click", function () {
    counter = 1;
    flag = false;
    mat = [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ];
    document.querySelector("h1").innerText = "Play";
    for (let child of children)
        child.innerText = "";
});

document.querySelector("#reset").addEventListener("click", function () {
    p1 = 0;
    p2 = 0;
    sec1Span.innerText = " 0";
    sec3Span.innerText = " 0";
});
