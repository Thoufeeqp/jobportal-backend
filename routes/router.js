const express=require('express')
const middleware=require('../middleware/routerspecifc')
const controller=require('../controller/controller')


const router=new express.Router()

router.post('/register',controller.register)


router.post('/register/freelancer',controller.regfree)
router.post('/login/employer',controller.loginemployer)
router.post('/login/freelancer',controller.loginfreelancer)
router.post('/postjobs',middleware.loggmiddleware,controller.postjob)
router.post('/alljobs',middleware.loggmiddleware,controller.getjob)
router.get('/freelancerjobs',middleware.loggmiddleware,controller.freelancerjobs)
router.post('/view',middleware.loggmiddleware,controller.view)
router.post('/apply',middleware.loggmiddleware,controller.apply)
router.post('/fetchapplicant',middleware.loggmiddleware,controller.fetchapplicants)
router.post('/delete',middleware.loggmiddleware,controller.delete)
router.post('/deleteaccount',middleware.loggmiddleware, controller.deleteaccount)
router.post('/deleteaccountfree',middleware.loggmiddleware, controller.deleteaccountfree)
module.exports=router