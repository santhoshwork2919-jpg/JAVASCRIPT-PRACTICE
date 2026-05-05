//Multi diemensitional array

let arr = [
    [
        [200,300],[400,700]
    ],
    [
        [20,30],[40,70]
    ]
];

let i;
let j;
let k;

for(i=0 ; i < arr.length ; i++)
{
    for(j=0 ; j<arr[i].length ; j++)
    {
        for(k=0 ; k <arr[i][j].length ; k++)
        {
            console.log(arr[i][j][k]);
        }
    }

};