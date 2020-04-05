// 기존 routes/index.js 내에 존재하던 API들을, 하나씩 모듈화를 통해 컨트롤러 내 정의
// 유저의 요청에 따라 처리하는 코드를 모듈화해서 컨트롤러에 옮긴후 라우터에서 해당 컨트롤러 내의 모듈을 불러옴

function basicAPI (req, res) {
    res.status(200).json(
        {
            "success" : true
        }
    );
}

function testAPI (req, res) {
    res.status(200).json(
        {
            "message" : "test"
        }
    );
}

function postTestAPI (req, res) {
    const user_message = req.body.message;
    res.status(200).json(
        {
            "message" : user_message
        }
    );
}

module.exports = {
    basicAPI: basicAPI,
    testAPI: testAPI,
    postTestAPI: postTestAPI,
}