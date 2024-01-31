import { Routes } from '@angular/router';
import { GetallOrganizationComponent } from './Pages/Organization/getall-organization/getall-organization.component';
import { GetbyidOrganizationComponent } from './Pages/Organization/getbyid-organization/getbyid-organization.component';
import { GetbynameOrganizationComponent } from './Pages/Organization/getbyname-organization/getbyname-organization.component';
import { AddorganizationComponent } from './Pages/Organization/addorganization/addorganization.component';
import { GetallSiteComponent } from './Pages/Site/getall-site/getall-site.component';
import { GetbynameSiteComponent } from './Pages/Site/getbyname-site/getbyname-site.component';
import { AddsiteComponent } from './Pages/Site/addsite/addsite.component';
import { GetallUserComponent } from './Pages/User/getall-user/getall-user.component';
import { RegisterUserComponent } from './Pages/User/register-user/register-user.component';
import { EditUserComponent } from './Pages/User/edit-user/edit-user.component';
import { ValidateUserComponent } from './Pages/User/validate-user/validate-user.component';
import { GetallSubjectComponent } from './Pages/Subject/getall-subject/getall-subject.component';
import { GetbyidSubjectComponent } from './Pages/Subject/getbyid-subject/getbyid-subject.component';
import { GetbynameSubjectComponent } from './Pages/Subject/getbyname-subject/getbyname-subject.component';
import { AddsubjectComponent } from './Pages/Subject/addsubject/addsubject.component';
import { AddQuestionbankComponent } from './Pages/QuestionBank/addquestionbank/add-questionbank.component';
import { GetallQuestionbankComponent } from './Pages/QuestionBank/getall-questionbank/getall-questionbank.component';
import { GetbyidQuestionbankComponent } from './Pages/QuestionBank/getbyid-questionbank/getbyid-questionbank.component';
import { AddassignedtestComponent } from './Pages/AssignedTest/addassignedtest/addassignedtest.component';
import { GetassignedtestbyidComponent } from './Pages/AssignedTest/getassignedtestbyid/getassignedtestbyid.component';
import { GetassignedtestsComponent } from './Pages/AssignedTest/getassignedtests/getassignedtests.component';
import { AddtestComponent } from './Pages/TestStructure/addtest/addtest.component';
import { GettestbyidTeststructureComponent } from './Pages/TestStructure/gettestbyid-teststructure/gettestbyid-teststructure.component';
import { GettestsTeststructureComponent } from './Pages/TestStructure/getalltests-teststructure/gettests-teststructure.component';
import { AdduserresponseComponent } from './Pages/UserResponse/adduserresponse/adduserresponse.component';
import { GetuserresponsesComponent } from './Pages/UserResponse/getuserresponses/getuserresponses.component';
import { GetuserresponsebyidComponent } from './Pages/UserResponse/getuserresponsebyid/getuserresponsebyid.component';
import { GetbyidSiteComponent } from './Pages/Site/getbyid-site/getbyid-site.component';
import { LoginComponent } from './Pages/login/login.component';
import { AdminDashboardComponent } from './Pages/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { GetassignedtestbyuserIdComponent } from './getassignedtestbyuser-id/getassignedtestbyuser-id.component';
import { GettestbytestidComponent } from './gettestbytestid/gettestbytestid.component';
import { GetquestionsbysubjectidComponent } from './getquestionsbysubjectid/getquestionsbysubjectid.component';
import { FeedbackUserComponent } from './feedback-user/feedback-user.component';
import { HomeComponent } from './home/home.component';
import { Home1Component } from './home1/home1.component';
import { ImageUploadComponent } from './image-upload/image-upload.component';


export const routes: Routes = [
    {path:'user-dashboard',component:UserDashboardComponent},
    {path:'getassignedtestbyuserid',component:GetassignedtestbyuserIdComponent},
    {path:'gettestbytestid/:testID',component:GettestbytestidComponent},
    {path:'getquestionsbysubid/:subjectID',component:GetquestionsbysubjectidComponent},
    {path:'feedback',component:FeedbackUserComponent},
    {path:'getallorganization',component:GetallOrganizationComponent},
    {path:'getbyidorganization/:oid',component:GetbyidOrganizationComponent},
    {path:'getbynameorganization',component:GetbynameOrganizationComponent},
    {path:'addorganization',component:AddorganizationComponent},
    {path:"getallsite",component:GetallSiteComponent},
    {path:'getbyidsite/:sid',component:GetbyidSiteComponent},
    {path:'getbynamesite',component:GetbynameSiteComponent},
    {path:'addsite',component:AddsiteComponent},
    {path:'getalluser',component:GetallUserComponent},
    {path:'registeruser',component:RegisterUserComponent},
    {path:'edituser',component:EditUserComponent},
    {path:'validateuser/:sid',component:ValidateUserComponent},
    {path:'getallsubject',component:GetallSubjectComponent},
    {path:'getbyidsubject/:sid',component:GetbyidSubjectComponent},
    {path:'getbynamesubject',component:GetbynameSubjectComponent},
    {path:'addsubject',component:AddsubjectComponent},
    {path:'addquestionbank',component:AddQuestionbankComponent},
    {path:'getallquestionbank',component:GetallQuestionbankComponent},
    {path:'getbyidquestionbank/:qid',component:GetbyidQuestionbankComponent},
    {path:'addassignedtest',component:AddassignedtestComponent},
    {path:'getassignedtestbyid/:sid',component:GetassignedtestbyidComponent},
    {path:'getassignedtests',component:GetassignedtestsComponent},
    {path:'addtest',component:AddtestComponent},
    {path:'gettestbyid/:sid',component:GettestbyidTeststructureComponent},
    {path:'getalltests',component:GettestsTeststructureComponent},
    {path:'adduseresponse',component:AdduserresponseComponent},
    {path:'getuserresponses',component:GetuserresponsesComponent},
    {path:'getuserresponsebyid',component:GetuserresponsebyidComponent},
    {path:'',component:LoginComponent},
    {path:'home',component:HomeComponent},
    {path:'Image',component:ImageUploadComponent},
    
    {path: 'admin-dashboard', component: AdminDashboardComponent, children: [
      {path: 'home1', component:Home1Component},
        { path:'addorganization', component:AddorganizationComponent},
        { path:'getallorganization', component:GetallOrganizationComponent},
        { path:'getbyidorganization', component:GetbyidOrganizationComponent},
        { path: 'addsite', component: AddsiteComponent},
        { path:'getallsite', component:GetallSiteComponent},
        { path:'getbyidsite', component:GetbyidSiteComponent},
        { path: 'addsubject', component: AddsubjectComponent},
        { path:'getallsubject', component:GetallSubjectComponent},
        { path:'getbyidsubject', component:GetbyidSubjectComponent},
        { path:'getallquestionbank', component:GetallQuestionbankComponent},
        {path:'addquestionbank',component:AddQuestionbankComponent},
        {path:'addtest',component:AddtestComponent},
        {path:'getalltests',component:GettestsTeststructureComponent},
        {path:'addassignedtest',component:AddassignedtestComponent},
        {path:'getassignedtests',component:GetassignedtestsComponent},
         {path:'getuserresponses',component:GetuserresponsesComponent},
         {path:'getalluser',component:GetallUserComponent},
         //{ path: '', component: LoginComponent },
        
        {path:'Image',component:ImageUploadComponent},
      ],},
      {path: 'user-dashboard', component: UserDashboardComponent, children: [
        {path:'home',component:HomeComponent},
        {path:'edituser',component:EditUserComponent},
        {path:'getassignedtestbyuserid',component:GetassignedtestbyuserIdComponent},
        {path:'gettestbytestid/:testID',component:GettestbytestidComponent},
        // { path: '', component: LoginComponent },
        {path:'Image',component:ImageUploadComponent},
      ],
      }
];
