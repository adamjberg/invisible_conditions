var members = [{
  first: "Simon",
  last: "Lisaingo",
  title: "Chair / Funding & Outreach",
  quote: "He hopes this conference will allow him to give back some of the life lessons he has learnt along his journey.",
  bio: "Simon has lived with Crohn's disease for over 10 years. He hopes this conference will allow him to give back some of the life lessons he has learnt along his journey. His research examines how students overcome challenges they face at school and at home. Prior to commencing his graduate studies in school psychology, Simon worked as a middle school and high school teacher in the Yukon, Ontario, British Columbia.",
  qualifications: "PhD student, School Psychology Program, Faculty of Education, University of British Columbia"
},
{
  first: "Adam",
  last: "Huizinga",
  title: "Vice-Chair / Logistics & Mentorship",
  quote: "His hope is to share his experience not only managing the disease, but to de-stigmatize conversations.",
  bio: "Adam was diagnosed with Crohn's disease when he was 12 years old and developed anxiety and depression alongside his struggles with his illness. His hope is to share his experience not only managing the disease, but to de-stigmatize conversations about mental and physical illness, and how, in spite of these challenges, we can still live vibrant and meaningful lives.",
  qualifications: "Undergraduate student, Faculty of Arts, University of British Columbia"
},
{
  first: "Robyn",
  last: "McClure",
  title: "Content, Experts, & Evaluation",
  quote: "She believes this conference will offer an invaluable safe space for students to share their challenges with IBD.",
  bio: "Robyn was diagnosed with Ulcerative Colitis three years ago, and since then has found a tremendous source of support amongst her peers with Crohn's and Colitis. Based on that experience, she believes this conference will offer an invaluable safe space for students to share their challenges with IBD, while finding strength in the community and themselves. She hopes to contribute through her years of research and experiences working with youth and chronic illness. ",
  qualifications: "PhD student, School Psychology Program, Faculty of Education, University of British Columbia"
},
{
  first: "Peter",
  last: "Dobranowski",
  title: "Content, Experts, & Evaluation",
  quote: "Because of his condition, he has committed himself to contributing to the conversation of curing IBD.",
  bio: "Peter has been diagnosed with Crohn's disease, Indeterminate Colitis, and Ulcerative colitis throughout his 11 years with IBD. Because of his condition, he has committed himself to contributing to the conversation of curing IBD directly, through hands-on research and indirectly, through fundraising efforts with local organizations. He believes that connecting with others with IBD has been integral to his success, and hopes to facilitate this type of connection with youth living with IBD.",
  qualifications: "MSc student, Experimental Medicine, Faculty of Medicine, University of British Columbia"
},
{
  first: "Hailey",
  last: "Kolenda",
  title: "Marketing & Recruitment",
  quote: "Since her journey began she has been driven to help support others going through similar situations.",
  bio: "Hailey was diagnosed with Ulcerative Colitis during her time at university (2010). She has had several surgeries to remove her colon, and create a j pouch. Since her journey began she has been driven to help support others going through similar situations. She designed her graduate project around creating better resources for people going through ostomy surgeries. She strongly believes in the connections made between others with IBD and that the stories they share can aid in pesonal healing. This conference is a wonderful way to give back and build community!",
  qualifications: "Graphic Designer, BA in Communication Design, Emily Carr University of Art and Design"
},
{
  first: "Karmen",
  last: "Lisaingo",
  title: "Logistics & Mentorship",
  quote: "She hopes that this conference can help participants increase their self-advocacy skills while helping to build the community.",
  bio: "Karmen is a UBC alumni who has been involved with the Crohn's and Colitis community since her partner was diagnosed with Crohn's disease over 10 years ago. She is interested in the role that friends and family can have in supporting youth with IBD as they become more independent. She hopes that this conference can help participants increase their self-advocacy skills while helping to build the community around them as they transition to adulthood.",
  qualifications: "Alumni, Faculty of Law, University of British Columbia and University of Ottawa"
}];

$(document).ready(function () {
  var members = $('.member');

  members.click(function (member) {
    var index = members.index(this);
    modalService.setIndex(index);
  });
});