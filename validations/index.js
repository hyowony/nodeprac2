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
const postCreateValidation = joi.object({
  title: joi.string().not('').required(),
  content: joi.string().not('').required(),
  userId : joi.number().required(),

  
})
const postUpdateValidation = joi.object({
  title: joi.string().optional().not(''),
  content:joi.string().optional().not(''),
  userId: joi.forbidden(),
})

const commentCreateValidation = joi.object({
  content :joi.string().not('').required(),
  userId: joi.number().required(),
  postId: joi.forbidden(),

})
const commentupdateValidation = joi.object({
  content : joi.string().not('')
})
module.exports =  {
  signupValidation, 
  postCreateValidation,
  postUpdateValidation,
  commentCreateValidation, 
  commentupdateValidation
};
//여러개를 보낼 때에는 객체 형식으로 모듈 익스포츠 한다. 