import { db } from '../config/firebase';

export const getAllEvents = () => {
    let events = [];
    return new Promise((resolve, reject) => {
        db.collection('events')
            .where('visible', '==', true)
            .get()
            .then((doc) => {
                if (doc.empty) {
                    resolve({
                        success: false,
                        data: []
                    });
                }
                if (Object.keys(doc).length > 0) {
                    doc.forEach((res) => {
                        events.push(res.data());
                    });
                    resolve({
                        success: true,
                        data: events
                    });
                }
            })
            .catch((e) => {
                reject(e);
            });
    });
};

export const getSpecificEvent = (id) => {
    return new Promise((resolve, reject) => {
        db.collection('events')
            .doc(id)
            .get()
            .then((doc) => {
                if (doc.empty) {
                    resolve({
                        success: false,
                        data: {}
                    });
                }
                if (!doc.exists) {
                    resolve({
                        success: false,
                        data: {}
                    });
                }
                if (Object.keys(doc).length > 0) {
                    resolve({
                        success: true,
                        data: doc.data()
                    });
                }
            })
            .catch((e) => {
                reject(e);
            });
    });
};
export const getAllSpeakersFromEvent = (speakerIds) => {
    const speakers = [];
    return new Promise((resolve, reject) => {
        if (speakerIds.length === 0) {
            resolve({
                status: 'empty',
                data: []
            });
        }

        speakerIds.map((id, index) => {
            db.collection('Speakers')
                .doc(id)
                .get()
                .then((doc) => {
                    if (!doc.empty) {
                        speakers.push(doc.data());
                    }
                    if ((speakerIds.length = index + 1)) {
                        if (speakers.length === 0) {
                            resolve({
                                status: 'empty',
                                data: []
                            });
                        }
                        resolve({
                            status: 'success',
                            data: speakers
                        });
                    }
                })
                .catch((e) => {
                    resolve({
                        status: 'error',
                        data: e.message
                    });
                    reject(e);
                });
        });
    });
};

export const getAllPartnersFromEvent = (partnerIds) => {
    const partners = [];
    return new Promise((resolve, reject) => {
        if (partnerIds.length === 0) {
            resolve({
                status: 'empty',
                data: []
            });
            return;
        }
        partnerIds.map((id, index) => {
            db.collection('partners')
                .doc(id)
                .get()
                .then((doc) => {
                    if (!doc.empty) {
                        partners.push(doc.data());
                    }
                    if ((partnerIds.length = index + 1)) {
                        if (partners.length === 0) {
                            resolve({
                                status: 'empty',
                                data: []
                            });
                        }
                        resolve({
                            status: 'success',
                            data: partners
                        });
                    }
                })
                .catch((e) => {
                    resolve({
                        status: 'error',
                        data: e.message
                    });
                    reject(e);
                });
        });
    });
};

export const getAllProjects = () => {
    let projects = [];
    return new Promise((resolve, reject) => {
        db.collection('projects')
            .where('visible', '==', true)

            .get()
            .then((doc) => {
                if (doc.empty) {
                    resolve({
                        success: false,
                        data: []
                    });
                }
                if (Object.keys(doc).length > 0) {
                    doc.forEach((res) => {
                        projects.push(res.data());
                    });
                    resolve({
                        success: true,
                        data: projects
                    });
                }
            })
            .catch((e) => {
                reject(e);
            });
    });
};

export const getRecentProjects = () => {
    let projects = [];
    return new Promise((resolve, reject) => {
        db.collection('projects')
            .where('visible', '==', true)
            .limit(8)
            .get()
            .then((doc) => {
                if (doc.empty) {
                    resolve({
                        success: false,
                        data: []
                    });
                }
                if (Object.keys(doc).length > 0) {
                    doc.forEach((res) => {
                        projects.push(res.data());
                    });
                    resolve({
                        success: true,
                        data: projects
                    });
                }
            })
            .catch((e) => {
                reject(e);
            });
    });
};

export const getSpecificProject = (id) => {
    return new Promise((resolve, reject) => {
        db.collection('projects')
            .doc(id)
            .get()
            .then((doc) => {
                if (doc.empty) {
                    resolve({
                        success: false,
                        data: {}
                    });
                }
                if (!doc.exists) {
                    resolve({
                        success: false,
                        data: {}
                    });
                }
                if (Object.keys(doc).length > 0) {
                    resolve({
                        success: true,
                        data: doc.data()
                    });
                }
            })
            .catch((e) => {
                reject(e);
            });
    });
};

export const getAllTeam = () => {
    let team = [];
    return new Promise((resolve, reject) => {
        db.collection('team')
            .where('visible', '==', true)
            .where('role', 'in', ['Core Team', 'Organizing Team', 'Volunteer'])
            .get()
            .then((doc) => {
                if (doc.empty) {
                    resolve({
                        status: 'empty',
                        data: []
                    });
                }
                if (Object.keys(doc).length > 0) {
                    doc.forEach((res) => {
                        team.push(res.data());
                    });
                    resolve({
                        status: 'success',
                        data: team
                    });
                }
            })
            .catch((e) => {
                resolve({
                    status: 'error',
                    data: e.message
                });
                reject(e);
            });
    });
};

export const getAllFaculty = () => {
    let faculty = [];
    return new Promise((resolve, reject) => {
        db.collection('team')
            .where('visible', '==', true)
            .where('role', '==', 'Faculty Coordinator')
            .get()

            .then((doc) => {
                if (doc.empty) {
                    resolve({
                        status: 'empty',
                        data: []
                    });
                }
                if (Object.keys(doc).length > 0) {
                    doc.forEach((res) => {
                        faculty.push(res.data());
                    });
                    resolve({
                        status: 'success',
                        data: faculty
                    });
                }
            })
            .catch((e) => {
                resolve({
                    status: 'error',
                    data: e.message
                });
                reject(e);
            });
    });
};

export const getTeam = () => {
    let team = [];
    return new Promise((resolve, reject) => {
        db.collection('team')
            .get()
            .then((doc) => {
                if (doc.empty) {
                    resolve({
                        success: false,
                        data: {}
                    });
                }
                if (Object.keys(doc).length > 0) {
                    doc.forEach((res) => {
                        team.push(res.data());
                    });
                    resolve({
                        success: true,
                        data: team
                    });
                }
            })
            .catch((e) => {
                reject(e);
            });
    });
};

export const getTeamMember = (id) => {
    return new Promise((resolve, reject) => {
        db.collection('team')
            .doc(id)
            .get()
            .then((doc) => {
                if (doc.empty) {
                    resolve({
                        success: false,
                        data: {}
                    });
                }
                if (!doc.exists) {
                    resolve({
                        success: false,
                        data: {}
                    });
                }
                if (Object.keys(doc).length > 0) {
                    resolve({
                        success: true,
                        data: doc.data()
                    });
                }
            })
            .catch((e) => {
                reject(e);
            });
    });
};

const getEvent = (id) => {
    return new Promise((resolve, reject) => {
        db.collection('events')
            .doc(id)
            .get()
            .then((doc) => {
                if (doc.empty) {
                    resolve({
                        success: false,
                        data: {}
                    });
                }
                if (!doc.exists) {
                    resolve({
                        success: false,
                        data: {}
                    });
                }
                if (Object.keys(doc).length > 0) {
                    resolve({
                        success: true,
                        data: doc.data()
                    });
                }
            })
            .catch((e) => {
                reject(e);
            });
    });
};

export const getSpeaker = (id) => {
    return new Promise((resolve, reject) => {
        db.collection('Speakers')
            .doc(id)
            .get()
            .then((doc) => {
                if (doc.empty) {
                    resolve({
                        success: false,
                        data: {}
                    });
                }
                if (!doc.exists) {
                    resolve({
                        success: false,
                        data: {}
                    });
                }
                if (Object.keys(doc).length > 0) {
                    resolve({
                        success: true,
                        data: doc.data()
                    });
                }
            })
            .catch((e) => {
                reject(e);
            });
    });
};

export const getAllSpeakers = () => {
    let speakers = [];
    return new Promise((resolve, reject) => {
        db.collection('Speakers')
            .get()
            .then((doc) => {
                if (doc.empty) {
                    resolve({
                        success: false,
                        data: {}
                    });
                }
                if (Object.keys(doc).length > 0) {
                    doc.forEach((res) => {
                        speakers.push(res.data());
                    });
                    resolve({
                        success: true,
                        data: speakers
                    });
                }
            })
            .catch((e) => {
                reject(e);
            });
    });
};

export const getFeaturesEvents = () => {
    return new Promise((resolve, reject) => {
        db.collection('featureevents')
            .doc('data')
            .get()
            .then((doc) => {
                if (doc.empty) {
                    resolve({
                        success: false,
                        data: {}
                    });
                }
                if (!doc.exists) {
                    resolve({
                        success: false,
                        data: {}
                    });
                }
                if (Object.keys(doc).length > 0) {
                    resolve({
                        success: true,
                        data: doc.data().eventid
                    });
                    // resolve(doc.data().eventid)
                }
            })
            .catch((e) => {
                reject(e);
            });
    });
};

export const getAllPartners = () => {
    let partners = [];
    return new Promise((resolve, reject) => {
        db.collection('partners')
            .get()
            .then((doc) => {
                if (doc.empty) {
                    resolve({
                        success: false,
                        data: {}
                    });
                }
                if (Object.keys(doc).length > 0) {
                    doc.forEach((res) => {
                        partners.push(res.data());
                    });
                    resolve({
                        success: true,
                        data: partners
                    });
                }
            })
            .catch((e) => {
                reject(e);
            });
    });
};

export const getAllConfig = () => {
    let config = [];
    return new Promise((resolve, reject) => {
        db.collection('config')
            .get()
            .then((doc) => {
                if (doc.empty) {
                    resolve({
                        success: false,
                        data: {}
                    });
                }
                if (Object.keys(doc).length > 0) {
                    doc.forEach((res) => {
                        config.push({
                            name: res.id,
                            data: res.data()
                        });
                    });
                    resolve({
                        success: true,
                        data: config
                    });
                }
            })
            .catch((e) => {
                reject(e);
            });
    });
};

export const getAllUpcomingMeetupsEvents = (id) => {
    return new Promise((resolve, reject) => {
        fetch('https://cors-anywhere.herokuapp.com/https://api.meetup.com/' + id + '/events?&sign=true')
            .then((res) => res.json())
            .then((data) => {
                resolve({
                    success: true,
                    data: data
                });
            })
            .catch((e) => {
                reject(e);
            });
    });
};
export const getCommunityGuidelines = () => {
    return new Promise((resolve, reject) => {
        db.collection('config')
            .doc('communityguidelines')
            .get()
            .then((doc) => {
                if (doc.empty) {
                    resolve({
                        success: false,
                        data: {}
                    });
                }
                if (Object.keys(doc.data()).length > 0) {
                    resolve({
                        success: true,
                        data: doc.data()
                    });
                }
            })
            .catch((e) => {
                reject(e);
            });
    });
};

export const getAllMeetupPastEvents = (id) => {
    return new Promise((resolve, reject) => {
        fetch(
            'https://cors-anywhere.herokuapp.com/https://api.meetup.com/' +
                id +
                '/events?desc=true&photo-host=public&page=300&status=past&sign=true'
        )
            .then((res) => res.json())
            .then((data) => {
                resolve({
                    success: true,
                    data: data
                });
            })
            .catch((e) => {
                reject(e);
            });
    });
};

export const getAllMediumBlogs = (id) => {
    return new Promise((resolve, reject) => {
        let baseURL = 'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/' + id;

        fetch(baseURL)
            .then((res) => res.json())
            .then((data) => {
                if (data.items.length > 0) {
                    resolve({
                        success: true,
                        data: data
                    });
                }
            })
            .catch((e) => {
                reject(e);
            });
    });
};

export const getPartner = (id) => {
    return new Promise((resolve, reject) => {
        db.collection('partners')
            .doc(id)
            .get()
            .then((doc) => {
                if (doc.empty) {
                    resolve({
                        success: false,
                        data: {}
                    });
                }
                if (!doc.exists) {
                    resolve({
                        success: false,
                        data: {}
                    });
                }
                if (Object.keys(doc).length > 0) {
                    resolve({
                        success: true,
                        data: doc.data()
                    });
                }
            })
            .catch((e) => {
                reject(e);
            });
    });
};

export const getForm = (slug) => {
    return new Promise((resolve, reject) => {
        db.collection('Forms')
            .doc(slug)
            .get()
            .then((doc) => {
                if (doc.empty) {
                    resolve({
                        success: false,
                        data: {}
                    });
                }
                if (!doc.exists) {
                    resolve({
                        success: false,
                        data: {}
                    });
                }
                if (Object.keys(doc).length > 0) {
                    resolve({
                        success: true,
                        data: doc.data()
                    });
                }
            })
            .catch((e) => {
                reject(e);
            });
    });
};
