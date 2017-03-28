
var bio = {
	"name": "Heather Phelps",
	"title": "Full Stack Developer",
	"github": "phelpsh",
	"telephone": "(xxx) xxx-xxxx",
	"skills": ["GIS", "business development",
		"web development", "database administration",
		"strategic intelligence"
	],
	"welcome": "Portfolio of work and skills highlight",
	"contacts": {
		"email": "heather.phelps@gmail.com",
		"phone": "832 833 5523"
	}
}

var education = {
	"schools": [{
		"name": "University of Denver",
		"city": "Denver, CO",
		"degree": "Master of Science",
		"major": "Geographic Information Science"
	}, {
		"name": "SUNY Buffalo",
		"city": "Buffalo, NY",
		"degree": "Bachelor of Arts",
		"major": "Physical and Environmental Geography"
	}]
}

var work = {
	"jobs": [
		{
			"employer": "Self",
			"title": "Writer",
			"location": "US-wide",
			"description": "Traveled around America to research a book",
			"dates": "2016-2017"
		},
		{
			"employer": "Polymorphic Systems",
			"title": "Global Administrator",
			"location": "Global Remote (London, Houston)",
			"description": "Managed global SaaS geospatial analysis system",
			"dates": "2015-2016"
		},
		{
			"employer": "US Government",
			"title": "Program Manager",
			"location": "Washington, Europe, Middle East",
			"description": "Furthered US policy",
			"dates": "2006-2015"
		}
	]
}

var projects = {
	"projects": [{
		"title": "Travels with Chesky",
		"dates": "2016-2017",
		"description": "Traveled around America to research and write a book"
	}, {
		"title": "Self",
		"dates": "Writer",
		"description": "Traveled around America to research a book"
	}]
}


// to populate page
var name = HTMLheaderName.replace("%data%", bio.name)
$("#header").append(name);

if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	
	for (var i = 1; i < bio.skills.length; i++) {
	    formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
		$("#skills").append(formattedSkill);
}

}

//populate jobs
for (job in work.jobs) {
	console.log(work.jobs[job].employer)
}