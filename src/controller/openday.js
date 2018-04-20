import express from 'express';
import passport from 'passport';
import User from '../model/user';

import isLoggedIn from '../context/isLoggedIn';


let router = express.Router();


router.get('/openday/data', function (req, res) {

    // TODO: Implement actual connectino to a datasource

    res.send({
            "schedule": [{
                "date": "2018-04-21",
                "groups": [{
                    "time": "11:00 - 11:15",
                    "sessions": [{
                        "name": "Checkin",
                        "timeStart": "11:00",
                        "timeEnd": "11:15",
                        "location": "Room 407",
                        "tracks": ["Reception"],
                        "id": "1"
                    }]
                }, {
                    "time": "11:30 - 13:00",
                    "sessions": [{
                        "name": "Going live with Google Cloud Platform",
                        "location": "Room 103",
                        "description": "Where is the middle ground? Inexperienced developers are overwhelmed and seassoned developers tend to just over-engineer. In this talk, José will show just now simple and simple it can be to deploy software to production if we use the right tools.",
                        "speakerNames": ["José Fonseca"],
                        "timeStart": "11:30",
                        "timeEnd": "12:15",
                        "tracks": ["Talk"],
                        "id": "2"
                    }, {
                        "name": "(Hello) Switft: From Playground to iOS App (Workshop)",
                        "location": "Room 106",
                        "description": "...",
                        "speakerNames": ["Renato Rodrigues"],
                        "timeStart": "11:30",
                        "timeEnd": "13:00",
                        "tracks": ["Workshop"],
                        "id": "3"
                    }, {
                        "name": "Supercharged Web Apps",
                        "location": "Room 103",
                        "description": "On this talk we explore current web platform technologies that narrow the gap between what's possible in the web-based vs native apps world. \n With a main focus in service workers, we'll see strategies to make our web applications load super-fast and offer an offline-capable, reliable user experience.",
                        "speakerNames": ["Tiago Nunes"],
                        "timeStart": "12:15",
                        "timeEnd": "13:00",
                        "tracks": ["Talk"],
                        "id": "4"
                    }]
                }, {
                    "time": "13:00 - 14:00",
                    "sessions": [{
                        "name": "Lunch",
                        "location": "Room 404",
                        "description": "Nothing beats sharing food a way to connect with people.",
                        "timeStart": "13:00",
                        "timeEnd": "14:00",
                        "tracks": ["Food"],
                        "id": "5"
                    }]
                }, {
                    "time": "14:00 - 16:00",
                    "sessions": [{
                        "name": "br3AtH1nG a§ hUm4n5",
                        "location": "Room 103",
                        "description": "Sometimes we forget how to be humans when we are at work. A lot of people normally say that they are different in the context of work and in the personal life. It’s like we wake up, we are ourselves while we take breakfast, while we wash our teeth and say drop our kids to school, then, a bit before 9 am, we take a deep breath and now we are another person, ready to go to work! How does the culture of an organization enables people being themselves or forces them to be other people? Are we breathing as humans or breathing as robots?",
                        "speakerNames": ["Pedro Teixeira"],
                        "timeStart": "14:00",
                        "timeEnd": "14:30",
                        "tracks": ["Talk"],
                        "id": "6"
                    }, {
                        "name": "God is a Monad",
                        "location": "Room 103",
                        "description": "On this talk you will see that you are probably using monads and other related concepts without knowing, in your everyday life as a software developer.",
                        "speakerNames": ["Mehul Irá"],
                        "timeStart": "14:30",
                        "timeEnd": "15:00",
                        "tracks": ["Talk"],
                        "id": "7"
                    }, {
                        "name": "From Services to Products... And then came Statful",
                        "location": "Room 103",
                        "description": "Presenting the main challenges between delivering services and developing/promoting your own product. At the end you'll be introduced to Statful - Mindera's first _baby_ product (now a 2 year toddler).",
                        "speakerNames": ["Hugo Valente"],
                        "timeStart": "15:00",
                        "timeEnd": "15:30",
                        "tracks": ["Talk"],
                        "id": "8"
                    }, {
                        "name": "Mocked Test Scenarios with Selenium",
                        "location": "Room 103",
                        "description": "In this talk, we'll try to demonstrate how you can make use of the proxy capabilities of Selenium to set up better test scenarios. The main focus will be to show you how you can isolate your tests by abstracting your webpage from the backend calls.",
                        "speakerNames": ["Ricardo Moura"],
                        "timeStart": "15:30",
                        "timeEnd": "16:00",
                        "tracks": ["Talk"],
                        "id": "9"
                    }]
                },
                    {
                        "time": "Interviews 11:30 - 16:00 (all day)",
                        "sessions": [{
                            "name": "Frontend (React, Angular, NodeJs)",
                            "timeStart": "11:30",
                            "timeEnd": "16:00",
                            "location": "Rooms 116, 106(afternoon), 216(morning)",
                            "tracks": ["Interviews"],
                            "id": "101"
                        },
                            {
                                "name": "Backend (Java, .NET)",
                                "timeStart": "11:30",
                                "timeEnd": "16:00",
                                "location": "Rooms 204, 311",
                                "tracks": ["Interviews"],
                                "id": "102"
                            },
                            {
                                "name": "Test Automation",
                                "timeStart": "11:30",
                                "timeEnd": "12:30",
                                "location": "Rooms 507",
                                "tracks": ["Interviews"],
                                "id": "103"
                            },
                            {
                                "name": "Android Development",
                                "timeStart": "11:30",
                                "timeEnd": "13:00",
                                "location": "Rooms 502",
                                "tracks": ["Interviews"],
                                "id": "104"
                            },
                            {
                                "name": "iOS Development",
                                "timeStart": "14:00",
                                "timeEnd": "16:00",
                                "location": "Rooms 507",
                                "tracks": ["Interviews"],
                                "id": "105"
                            }
                        ]
                    }]
            }],


            "speakers": [{
                "name": "Hugo Valente",
                "profilePic": "assets/img/speakers/hugo-valente.png",
                "twitter": "hugojsval",
                "about": "",
                "location": "Porto",
                "email": "hugo.valente@mindera.com",
                "phone": "",
                "id": "1"
            }, {
                "name": "José Fonseca",
                "profilePic": "assets/img/speakers/jose-fonseca.png",
                "twitter": "jaafonseca",
                "about": "Mindera Co-Founder",
                "location": "Porto",
                "email": "jose.fonseca@mindera.com",
                "phone": "",
                "id": "2"
            }, {
                "name": "Renato Rodrigues",
                "profilePic": "assets/img/speakers/renato.png",
                "twitter": "nsrenato",
                "about": "iOS Developer @ Mindera",
                "location": "Porto",
                "email": "renato.rodrigues@mindera.com",
                "phone": "",
                "id": "3"
            }, {
                "name": "Mehul Irá",
                "profilePic": "assets/img/speakers/mehul.png",
                "twitter": "hiddenbyte",
                "about": "",
                "location": "Porto",
                "email": "mehul.ira@mindera.com",
                "phone": "",
                "id": "4"
            }, {
                "name": "Tiago Nunes",
                "profilePic": "assets/img/speakers/tiago-nunes.png",
                "twitter": "tsbnunes",
                "about": "",
                "location": "Porto",
                "email": "tiago.nunes@mindera.com",
                "phone": "+1-541-754-3010",
                "id": "5"
            }, {
                "name": "Ricardo Moura",
                "profilePic": "assets/img/speakers/ricardo-moura.png",
                "twitter": "",
                "about": "",
                "location": "Porto",
                "email": "ricardo.moura@mindera.com",
                "phone": "",
                "id": "6"
            }, {
                "name": "Pedro Teixeira",
                "profilePic": "assets/img/speakers/pedro-teixeira.png",
                "twitter": "",
                "about": "",
                "location": "Porto",
                "email": "pedro.teixeira@mindera.com",
                "phone": "",
                "id": "Pedro Teixeira"
            }],


            "map": [{
                "name": "Mindera",
                "lat": 41.1532698,
                "lng": -8.6114772,
                "center": true
            }]

        }
    );
});



export default function () {
	return router;
};
