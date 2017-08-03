var members = [{
  first: "Simon",
  last: "Lisaingo",
  title: "Chair / Funding & Outreach",
  quote: "He hopes this conference will allow him to give back some of the life lessons he has learnt along his journey",
  bio: "Simon has lived with Crohn’s disease for over 10 years. He hopes this conference will allow him to give back some of the life lessons he has learnt along his journey. His research examines how students overcome challenges they face at school and at home. Prior to commencing his graduate studies in school psychology, Simon worked as a middle school and high school teacher in the Yukon, Ontario, British Columbia."
},
{
  first: "Adam",
  last: "Huizinga",
  title: "Vice-Chair / Logistics & Mentorship",
  quote: "His hope is to share his experience not only managing the disease, but to de-stigmatize conversations",
  bio: "Simon has lived with Crohn’s disease for over 10 years. He hopes this conference will allow him to give back some of the life lessons he has learnt along his journey. His research examines how students overcome challenges they face at school and at home. Prior to commencing his graduate studies in school psychology, Simon worked as a middle school and high school teacher in the Yukon, Ontario, British Columbia."
},
{
  first: "Robyn",
  last: "McClure",
  title: "Content, Experts, & Evaluation",
  quote: "She believes this conference will offer an invaluable safe space for students to share their challenges with IBD",
  bio: "Simon has lived with Crohn’s disease for over 10 years. He hopes this conference will allow him to give back some of the life lessons he has learnt along his journey. His research examines how students overcome challenges they face at school and at home. Prior to commencing his graduate studies in school psychology, Simon worked as a middle school and high school teacher in the Yukon, Ontario, British Columbia."
},
{
  first: "Peter",
  last: "Dobranowski",
  title: "Content, Experts, & Evaluation",
  quote: "Because of his condition, he has committed himself to contributing to the conversation of curing IBD",
  bio: "Simon has lived with Crohn’s disease for over 10 years. He hopes this conference will allow him to give back some of the life lessons he has learnt along his journey. His research examines how students overcome challenges they face at school and at home. Prior to commencing his graduate studies in school psychology, Simon worked as a middle school and high school teacher in the Yukon, Ontario, British Columbia."
},
{
  first: "Hailey",
  last: "Kolenda",
  title: "Marketing & Recruitment",
  quote: "Since her journey began she has been driven to help support others going through similar situations",
  bio: "Simon has lived with Crohn’s disease for over 10 years. He hopes this conference will allow him to give back some of the life lessons he has learnt along his journey. His research examines how students overcome challenges they face at school and at home. Prior to commencing his graduate studies in school psychology, Simon worked as a middle school and high school teacher in the Yukon, Ontario, British Columbia."
},
{
  first: "Karmen",
  last: "Lisaingo",
  title: "Logistics & Mentorship",
  bio: "Simon has lived with Crohn’s disease for over 10 years. He hopes this conference will allow him to give back some of the life lessons he has learnt along his journey. His research examines how students overcome challenges they face at school and at home. Prior to commencing his graduate studies in school psychology, Simon worked as a middle school and high school teacher in the Yukon, Ontario, British Columbia."
}];

$(document).ready(function () {
  var members = $('.member');

  members.click(function (member) {
    var index = members.index(this);
    modalService.setIndex(index);
  });
});