var express = require('express');
var router = express.Router();
const userConroller = require('../controllers');

router.get('/', userConroller.basicAPI);
router.get('/test', userConroller.testAPI);
router.get('/post_test', userConroller.postTestAPI);

/* 라우터 수정 

// 그러나, API서버 구축이 목적이므로, 
router.get('/', function(req, res) {
  // res.status('HTTP 상태 코드').json('json데이터')
  res.status(200).json(
    {
      "success" : true
    }
  );
});

// 새로운 API 만들기
router.get('/test', function(req, res) {
  res.status(200).json(
    {
      "message" : "test"
    }
  );
});

// 클라이언트가 POST방식으로 body에 json 형식 안에 message 를 요청하면, 서버쪽에 서 유저가 보내온 message 를 그대로 응답
router.post('/post_test', function(req, res) {  // // 클라이언트의 요청에 관한 정보는 모두 req 파라미터에 담기게 됨
  const user_message = req.body.message;  // req 안에 있는 message 의 정보를 user_message 변수에 담아두어서, 응답
  res.status(200).json(
    {
      "message" : user_message
    }
  );
});
*/
module.exports = router;