function typing01(txt,tlen){
    var i = 0;
    const p1 = new Promise((resolve,reject) => {
        var ivid = window.setInterval(() => {
            i = i + 1
            txtShow = txt.substring(0,i);
            $('h4').text(txtShow);
            if (i >= tlen){
                window.clearInterval(ivid);
            }
        },100);

        window.setTimeout(() => {
            resolve('done');
        },tlen*100 + 2500);
    });
    return p1
}

function test(txt){
    var tlen = txt.length;
    var i = 0;
    var j = 0;
    const p2 = new Promise ((resolve) =>{
        typing01(txt,tlen).then(() => {
            var ivid2 = window.setInterval(()=> {
                j = j + 1;
                txtShow = txt.substring(0,tlen-j);
                $('h4').text(txtShow);
                if (tlen-j <= 0){
                    window.clearInterval(ivid2);
                }
            },100);
        });
        window.setTimeout(() => {
            resolve('done');
        },(tlen*2+2)*100 + 3000);
    });
    return p2
}

const p = new Promise((resolve) => {
    resolve();
});

p.then(() => {
    return test('Share Information');
}).then(() => {
    return test('Collaborate');
}).then(() => {
    return test('Visualize Thinking');
}).then(() => {
    return test('Create New Ideas');
})

window.setInterval(() => {
    p.then(() => {
        return test('Share Information');
    }).then(() => {
        return test('Collaborate');
    }).then(() => {
        return test('Visualize Thinking');
    }).then(() => {
        return test('Create New Ideas');
    })}
    ,25*1000
);