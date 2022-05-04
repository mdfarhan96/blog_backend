const get = (req, res) => {
  console.log("REq Params:", req.parms);
  const category = [
    {
      id: "1",
      category: "TollyWood",
      img: "http://bsmedia.business-standard.com/_media/bs/img/article/2018-04/27/full/1524814612-1299.jpg",
      det: "The Red Fort or Lal Qila ",
      date: "Feb 25, 2022",
      description:
        "The Red Fort or Lal Qila is a historic fort in Old Delhi, Delhi in India that served as the main residence of the Mughal Emperors. Emperor Shah Jahan commissioned construction of the Red Fort on 12 May 1638, when he decided to shift his capital from Agra to Delhi..",
    },
    {
      id: "2",
      category: "TollyWood",
      img: "https://media.istockphoto.com/photos/qutub-minar-picture-id179542718?k=20&m=179542718&s=612x612&w=0&h=m8vWZUnWZbd1f2QVtsWXiVYMdq9xAr33jJGj7JNNTBE=",
      det: "The Qutub Minar, also spelled as Qutb Minar and Qutab Minar, ",
      date: "January 3, 2022",
      description:
        "The Qutub Minar, also spelled as Qutb Minar and Qutab Minar, is a minaret and victory tower that forms part of the Qutb complex, which lies at the site of Delhi’s oldest fortified city, Lal Kot, founded by the Tomar Rajputs. It is a UNESCO World Heritage Site in the Mehrauli area of South Delhi, India",
    },
    {
      id: "3",
      category: "TollyWood",
      img: "https://lh3.googleusercontent.com/FqXvailyyIAehQ2Imh_8G1lU8hc-Yy-EQ8iZtNocgLaYD_cmVreNAttCWuxwu8Nm",
      det: "The Hawa Mahal is a palace in the city of Jaipur",
      date: " 05 Jan 2022 8:14 pm",
      description:
        "The Hawa Mahal is a palace in the city of Jaipur, India. Built from red and pink sandstone, the palace sits on the edge of the City Palace, Jaipur, and extends to the Zenana, or women's chambers.`",
    },
    {
      id: "4",
      category: "TollyWood",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/India_Gate%2C_New_Delhi_at_Night.jpg/300px-India_Gate%2C_New_Delhi_at_Night.jpg",
      det: "The India Gate ",
      date: "28nd January 2022 05:00 AM",
      description:
        "The India Gate is a war memorial located astride the Rajpath, on the eastern edge of the ceremonial axis of New Delhi, formerly called Kingsway.",
    },
    {
      id: "5",
      category: "Technology",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSZYTrxxjDEsHx86rSWfua1vxgAFoNGy1s0Ekj-6AaYpMbendyO9eeZ9Vc-fbctjHyV6E&usqp=CAU",
      det: "Robotic Process Automation (RPA)",
      date: " 12 March 2022",
      description:
        "Like AI and Machine Learning, Robotic Process Automation, or RPA, is another technology that is automating jobs. RPA is the use of software to automate business processes such as interpreting applications, processing transactions, dealing with data, and even replying to emails. RPA automates repetitive tasks that people used to do. ",
    },
    {
      id: "6",
      category: "Technology",
      img: "https://venturebeat.com/wp-content/uploads/2021/12/GettyImages-1202870693.jpg?fit=2113%2C1218&strip=all",
      det: " Machine Learning (ML)",
      date: " 10 March 2022",
      description:
        "Machine Learning the subset of AI, is also being deployed in all kinds of industries, creating a huge demand for skilled professionals. Forrester predicts AI, machine learning, and automation will create 9 percent of new U.S. jobs by 2025, jobs including robot monitoring professionals, data scientists, automation specialists, and content curators, making it another new technology trend you must keep in mind too!",
    },
    {
      id: "7",
      category: "Technology",
      img: "https://www.simplilearn.com/ice9/free_resources_article_thumb/simplilearn-artificial-intelligence-interview-questions-article.jpg",
      det: "Artificial Intelligence (AI)",
      date: " 9 March 2022",
      description:
        "Artificial intelligence (AI) is intelligence demonstrated by machines, as opposed to natural intelligence displayed by animals including humans. Leading AI textbooks define the field as the study of intelligent agents: any system that perceives its environment and takes actions that maximize its chance of achieving its goals AI applications include advanced web search engines (e.g., Google), recommendation systems (used by YouTube, Amazon",
    },
    {
      id: "8",
      category: "Technology",
      img: "https://blog.laval-virtual.com/wp-content/uploads/2021/04/vr-ar-realite-virtuelle-augmentee-business-technologies-immersives.jpg",
      det: "Virtual Reality and Augmented Reality",
      date: " 7 March 2022",
      description:
        "The next exceptional technology trend - Virtual Reality (VR) and Augmented Reality (AR), and Extended Reality (ER). VR immerses the user in an environment while AR enhances their environment. Although this technology trend has primarily been used for gaming thus far, it has also been used for training, as with VirtualShip, a simulation software used to train U.S. Navy, Army and Coast Guard ship captains",
    },
    {
      id: "9",
      category: "Jobs",
      img: "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2FPhoto%2FSeries%2F2021-01-tonight-we-veg-italian-chopped-salad%2FItalianChoppedSaladOption9",
      det: "Salads",
      date: " March 9, 2022 ",
      description:
        "any of various usually cold dishes: such as. a : raw greens (such as lettuce) often combined with other vegetables and toppings and served especially with dressing. b : small pieces of food (such as pasta, meat, fruit, or vegetables) usually mixed with a dressing (such as mayonnaise) or set in gelatin..",
    },
    {
      id: "10",
      category: "Jobs",
      img: "https://www.spiceupthecurry.com/wp-content/uploads/2020/09/paneer-tikka-recipe-2.jpg",
      det: "Starters`",
      date: " 7th March 2022 12:14 pm IST",
      description:
        "Well, a small dish of food or a drink taken before a meal or the main course of a meal, these tit-bits of food are known to increase appetite and thus known as Appetizers, which is just English to the French word Apéritif or Hors d'oeuvre or simply a Starter in colloquial. ",
    },
    {
      id: "11",
      category: "Jobs",
      img: "https://eatmightymeals.com/wp-content/uploads/2021/10/Nutrient-dense-foods-and-mental-health-blog-1024x1024.jpg",
      det: "Main Course",
      date: " March 06, 2022, 17:04 IST",
      description:
        "The main dish is usually the heaviest, heartiest, and most complex or substantive dish on a menu. The main ingredient is usually meat or fish; in vegetarian meals, the main course sometimes attempts to mimic a meat course. It is most often preceded by an appetizer, soup, and/or salad, and followed by a dessert. For those reasons the main course is sometimes referred to as the meat course. In formal dining, a well-planned main course can function as a sort of gastronomic apex or climax ",
    },
    {
      id: "12",
      category: "Jobs",
      img: "https://c.ndtvimg.com/2020-04/chd4rs3g_dessert_625x300_07_April_20.jpg",
      det: "Deserts",
      date: " March 10, 2022, 12:03 IST",
      description:
        "dessert, the last course of a meal. In the United States dessert is likely to consist of pastry, cake, ice cream, pudding, or fresh or cooked fruit. British meals traditionally end with nuts, fruits, and port or other dessert wine, while French practice is to end with fruit, cheese, and wine; in both Britain and France, a more elaborate meal would include a sweet course preceding the dessert offerings. ",
    },
    {
      id: "13",
      category: "Nature",
      img: "https://upload.wikimedia.org/wikipedia/commons/4/43/40._Schwimmzonen-_und_Mastersmeeting_Enns_2017_100m_Butterfly-9318.jpg",
      det: "Swimming ",
      date: " Feb 26, 2021, 09:53 (IST)",
      description:
        "Swimming is an individual or team racing sport that requires the use of one's entire body to move through water. The sport takes place in pools or open water",
    },
    {
      id: "14",
      category: "Nature",
      img: "https://media.istockphoto.com/photos/tennis-rackets-and-balls-leaned-against-the-net-picture-id1171084311?k=20&m=1171084311&s=612x612&w=0&h=5gTGOsXlkZkSggxRnxbevqt80mKf12xT6GXUC6MN_Qc=",
      det: "Tennis",
      date: "  March 7, 2022, 05:15 IST ",
      description:
        "Tennis is a racket sport that can be played individually against a single opponent or between two teams of two players each. Each player uses a tennis racket that is strung with cord to strike a hollow rubber ball covered with felt over or around a net and into the opponent's court.. ",
    },
    {
      id: "22",
      category: "Nature",
      img: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/cycling_3-6652c57.jpg",
      det: "Cycling",
      date: ": March 11, 2021, 09 .",
      description:
        "Cycling, also called bicycling or biking, is the use of bicycles for transport, recreation, exercise or sport. People engaged in cycling are referred to as cyclists, bicyclists, or bikers",
    },
    {
      id: "15",
      category: "Nature",
      img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/female-runner-running-at-summer-park-trail-healthy-royalty-free-image-1591373138.jpg",
      det: "Running ",
      date: " Feb 26, 2021, 09:53 (IST)",
      description:
        "Running is a method of terrestrial locomotion allowing humans and other animals to move rapidly on foot. Running is a type of gait characterized by an aerial phase in which all feet are above the ground (though there are exceptions).[1] This is in contrast to walking, where one foot is always in contact with the ground, the legs are kept mostly straight and the center of gravity vaults over the stance leg ",
    },
  ];
  if (req.params.category) {
    const newCategory = category.filter(
      (val) => val.category.toLowerCase() == req.params.category.toLowerCase()
    );
    res.send(newCategory);
  } else if (req.query.id) {
    const newCategory = category.filter((val) => val.id == req.query.id);
    res.send(newCategory);
  } else {
    res.send(category);
  }
};

module.exports.categoryGet = get;
