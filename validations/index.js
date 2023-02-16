//유효성 검사가 밸리데이션임.
//로그인 할 때 조건 부여하는 것 
//joi라는 라이브러리를 쓰기 위해서 폴더를 만듦

const joi = require("joi");

const signupValidation = joi.object({
  nickname: joi.string().alphanum().not('').required(),
  password: joi.string().min(3).not('').required(),
  confirm: joi.equal(joi.ref('password')).required().messages({
'any.only': '비밀번호가 틀렸어',
  }),
})
module.exports =  {
  signupValidation,
};
//여러개를 보낼 때에는 객체 형식으로 모듈 익스포츠 한다. 