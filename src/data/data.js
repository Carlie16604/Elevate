import Foundations from '../assets/Offers/Foundations.png';
import Water from '../assets/Offers/Water.png';
import Fire from '../assets/Offers/Fire.png';
import Air from '../assets/Offers/Air.png';

//I want to add a date available category for the calendar

export const offers = [
    {
      id: 1,
      name: "Foundations",
      img: Foundations,
      description: "This class is a great way to find out what pilates is all about. You will be learning about all the pilates fundamentals during a safe yet challenging workout.", 
      recommendation: "Recommendation: Start with 5-10 Foundations classes before moving on to next level classes.",
      // schedule: [
      //   {id: 2, day: 'monday', time: '9:00am - 10:00am', instructor: 'Lara Croft'},
      //   {id: 3, day: 'monday', time: '11:00am - 12:00pm', instructor: 'Lara Croft'},
      //   {id: 4, day: 'monday', time: '1:00pm - 2:00pm', instructor: 'Lara Croft'},
      //   {id: 5, day: 'tuesday', time: '5:30pm - 6:30pm', instructor: 'Lara Croft'},
      //   {id: 6, day: 'wednesday', time: '5:30pm - 6:30pm', instructor: 'Lara Croft'}
      // ]
    },
    {
      id: 2,
      name: "Water",
      img: Water,
      description: "Take 50 minutes out of your day to reconnect with a strong yet elongated body. Reset how your body feels.", 
      recommendation: "Recommendation: A great continuation after 5-10 Foundations level classes",
      // schedule: [
      //   {id: 2, day: 'tuesday', time: '9:00am - 10:00am', instructor: 'Kayla Price'},
      //   {id: 3, day: 'tuesday', time: '10:00am - 11:00am', instructor: 'Kayla Price'},
      //   {id: 4, day: 'thursday', time: '2:30pm - 3:30pm', instructor: 'Kayla Price'},
      //   {id: 5, day: 'friday', time: '2:30pm - 3:30pm', instructor: 'Kayla Price'},
      //   {id: 6, day: 'saturday', time: '9:00pm - 10:00pm', instructor: 'Netiri Sully'},
      //   {id: 7, day: 'saturday', time: '10:30am - 11:30am', instructor: 'Netiri Sully'}
      // ]
    },
    {
      id: 3,
      name: "Fire",
      img: Fire,
      description: "Take your pilates practice to the next level. Challenge yourself with this full body workout that focuses on building strength, flexibility, coordination and balance. Bring on the fire!",
      recommendation: "Recommendation: A great continuation to Water.",
      // schedule: [
      //   {id: 2, day: 'monday', time: '5:30pm - 6:30pm', instructor: 'Jake Sully'},
      //   {id: 3, day: 'tuesday', time: '11:30am - 12:30pm', instructor: 'Kayla Price'},
      //   {id: 4, day: 'wednesday', time: '9:00am - 10:00am', instructor: 'Sam Flynn'},
      //   {id: 5, day: 'wednesday', time: '11:00am - 12:00pm', instructor: 'Sam Flynn'},
      //   {id: 6, day: 'thursday', time: '10:00am - 11:00am', instructor: 'Izzy Vila'}
      // ]
    },
    {
      id: 4,
      name: "Air",
      img: Air,
      description: "Come and get your heart rate up in this 50-minute cardio focused class using a Pilates jump board. Due to its amazing design, this is a great workout to build your stamina while having a low impact on your joints.", 
      recommendation: "Recommendation: Take this class 2-3 times a week in combination of our other pilates classes to give your body the diversity of strength and cardio training.",
      // schedule: [
      //   {id: 2, day: 'monday', time: '3:30pm - 4:30pm', instructor: 'Hannah Cage'},
      //   {id: 3, day: 'tuesday', time: '3:30pm - 4:30pm', instructor: 'Hannah Cage'},
      //   {id: 4, day: 'thursday', time: '5:30pm - 6:30pm', instructor: 'Hannah Cage'},
      //   {id: 5, day: 'friday', time: '10:00am - 11:00am', instructor: 'Netiri Sully'},
      //   {id: 6, day: 'saturday', time: '2:30pm - 3:30pm', instructor: 'Harry Potter'}
      // ]
    },
];

export const Schedule = [
  {
    id: 1,
    day: "monday",
    classes: [
      {id: 2, type: 'foundations', time: '9:00am - 10:00am', instructor: 'Lara Croft'},
      {id: 3, type: "water", time: '1:00pm - 2:00pm', instructor: 'Jake Sully'},
      {id: 4, type: "air", time: '5:30pm - 6:30pm', instructor: 'Hannah Cage '}
    ]
  },
  {
    id: 2,
    day: "tuesday",
    classes: [
      {id: 3, type: "fire", time: '10:30pm - 11:30pm', instructor: "Sam Flynn"},
      {id: 4, type: 'air', time: "1:00pm - 2:00pm", instructor: 'Hannah Cage'},
      {id: 5, type: 'water', time: '5:30pm - 6:30pm', instructor: "Kayla Price"}
    ]
  },
  {
    id: 3,
    day: "wednesday",
    classes: [
      {id: 4, type: "foundations", time: "9:00am - 10:00am", instructor: 'Lara Croft'},
      {id: 5, type: 'fire', time: '12:00pm - 1:00pm', instructor: 'Sam Flynn'},
      {id: 6, type: 'water', time: '5:30pm - 6:30pm', instructor: "Kayla Price"}
    ]
  },
  {
    id: 4,
    day: 'thursday',
    classes: [
      {id: 5}
    ]
  },
  {
    id: 5,
    day: "friday",
    classes: [
      {}
    ]
  },
  {
    id: 6,
    day: "saturday",
    classes: [
      {}
    ]
  }
]