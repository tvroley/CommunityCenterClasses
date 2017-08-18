var classes = [
  {
    id: 1,
    organization_id: 1,
    name: "Basketball Dribbling",
    maximum_students: 10
  },
  {
    id: 2,
    organization_id: 1,
    name: "Friendship Bracelets",
    maximum_students: 11
  },
  {
    id: 3,
    organization_id: 1,
    name: "Dioramas",
    maximum_students: 14
  },
  {
	id: 4,
    organization_id: 1,
    name: "Collages",
    maximum_students: 20
  }
];

var students = [
  {
    id: 1,
    name: "Spiffy LeBiff"
  },
  {
    id: 2,
    name: "Daniel Turquoise"
  },
  {
    id: 3,
    name: "Jeffrey Michaels"
  },
  {
    id: 4,
    name: "Francis Darling"
  },
  {
    id: 5,
    name: "Judy Elizabeth"
  },
  {
    id: 6,
    name: "Calvin Philips"
  }
];

var class_sessions = [
  {
    id: 1,
    class_id: 1,
    start: "Mon, 29 May 2017 11:00:00 PDT -07:00",
    end: "Mon, 29 May 2017 12:30:00 PDT -07:00",
    student_ids: [1, 2]
  },
  {
    id: 2,
    class_id: 2,
    start: "Mon, 29 May 2017 12:00:00 PDT -07:00",
    end: "Mon, 29 May 2017 13:00:00 PDT -07:00",
    student_ids: [4, 6, 2]
  },
  {
    id: 3,
    class_id: 3,
    start: "Tue, 30 May 2017 11:00:00 PDT -07:00",
    end: "Tue, 30 May 2017 12:30:00 PDT -07:00",
    student_ids: [1, 2, 3]
  },
  {
    id: 4,
    class_id: 4,
    start: "Wed, 31 May 2017 11:00:00 PDT -07:00",
    end: "Wed, 31 May 2017 12:30:00 PDT -07:00",
    student_ids: [4, 5, 6]
  },
  {
    id: 5,
    class_id: 1,
    start: "Wed, 31 May 2017 12:00:00 PDT -07:00",
    end: "Wed, 31 May 2017 12:45:00 PDT -07:00",
    student_ids: [4, 3]
  },
  {
    id: 6,
    class_id: 2,
    start: "Wed, 31 May 2017 12:30:00 PDT -07:00",
    end: "Wed, 31 May 2017 13:30:00 PDT -07:00",
    student_ids: [4, 3, 2]
  },
  {
    id: 7,
    class_id: 3,
    start: "Wed, 31 May 2017 12:30:00 PDT -07:00",
    end: "Wed, 31 May 2017 14:00:00 PDT -07:00",
    student_ids: [1, 2]
  },
  {
    id: 8,
    class_id: 4,
    start: "Thu, 1 Jun 2017 12:00:00 PDT -07:00",
    end: "Thu, 1 Jun 2017 12:45:00 PDT -07:00",
    student_ids: [1, 4]
  },
  {
    id: 9,
    class_id: 1,
    start: "Thu, 1 Jun 2017 12:30:00 PDT -07:00",
    end: "Thu, 1 Jun 2017 14:00:00 PDT -07:00",
    student_ids: [4, 3]
  },
  {
    id: 10,
    class_id: 2,
    start: "Thu, 1 Jun 2017 13:30:00 PDT -07:00",
    end: "Thu, 1 Jun 2017 14:15:00 PDT -07:00",
    student_ids: [3, 1, 5]
  },
  {
    id: 11,
    class_id: 3,
    start: "Thu, 1 Jun 2017 14:00:00 PDT -07:00",
    end: "Thu, 1 Jun 2017 15:30:00 PDT -07:00",
    student_ids: [5, 2]
  },
  {
    id: 12,
    class_id: 4,
    start: "Thu, 1 Jun 2017 15:30:00 PDT -07:00",
    end: "Thu, 1 Jun 2017 17:00:00 PDT -07:00",
    student_ids: [1, 2]
  },
  {
    id: 13,
    class_id: 1,
    start: "Fri, 2 Jun 2017 12:00:00 PDT -07:00",
    end: "Fri, 2 Jun 2017 12:45:00 PDT -07:00",
    student_ids: [1, 2]
  },
  {
    id: 14,
    class_id: 2,
    start: "Fri, 2 Jun 2017 11:00:00 PDT -07:00",
    end: "Fri, 2 Jun 2017 12:30:00 PDT -07:00",
    student_ids: [3, 4]
  },
  {
    id: 15,
    class_id: 3,
    start: "Fri, 2 Jun 2017 13:00:00 PDT -07:00",
    end: "Fri, 2 Jun 2017 13:45:00 PDT -07:00",
    student_ids: [5, 6]
  },
  {
    id: 16,
    class_id: 4,
    start: "Fri, 2 Jun 2017 13:15:00 PDT -07:00",
    end: "Fri, 2 Jun 2017 14:15:00 PDT -07:00",
    student_ids: [4, 6]
  },
  {
    id: 17,
    class_id: 1,
    start: "Fri, 2 Jun 2017 14:00:00 PDT -07:00",
    end: "Fri, 2 Jun 2017 15:30:00 PDT -07:00",
    student_ids: [4, 6]
  }
];

function makeStudentSchedules(students, class_sessions){
    var schedules = [];
    for(var i = 0; i < students.length; i++){
        schedules.push({
            student_id: students[i].id,
            student_name: students[i].name,
            enrolled_classes: []
        });
        for(var j = 0; j < class_sessions.length; j++){
            for(var k = 0; k < class_sessions[j].student_ids.length; k++){
                if(students[i].id === class_sessions[j].student_ids[k]){
                    //add schedule information to the schedule variable
                    schedules[i].enrolled_classes.push({
                        start: new Date(class_sessions[j].start),
                        end: new Date(class_sessions[j].end),
                        id: class_sessions[j].id
                    });
                    //sort the schedules by start time in case not already sorted
                    var done = false;
                    var current_class = schedules[i].enrolled_classes.length - 1;
                    while(current_class > 0 && !done){
                        if(schedules[i].enrolled_classes[current_class].start < schedules[i].enrolled_classes[current_class - 1].start){
                            var temp = schedules[i].enrolled_classes[current_class];
                            schedules[i].enrolled_classes[current_class] = schedules[i].enrolled_classes[current_class - 1];
                            schedules[i].enrolled_classes[current_class - 1] = temp;
                        }
                        else{
                            done = true;
                        }
                        current_class--
                    }
                }
            }
        }
    }
	
	return schedules;
}

function printSchedules(schedules){
	for(var i = 0; i < schedules.length; i++){
		console.log(schedules[i].student_id + " " + schedules[i].student_name);
		for(var j = 0; j < schedules[i].enrolled_classes.length; j++){
			console.log(schedules[i].enrolled_classes[j].id);
			console.log(schedules[i].enrolled_classes[j].start);
			console.log(schedules[i].enrolled_classes[j].end);
			console.log('\n');
		}
		console.log('\n');
	}
}

function findScheduleConflicts(schedules){
	var conflicts = [];
    //find schedule conflicts
    for(var i = 0; i < schedules.length; i++){
        conflicts.push({
            student_id: students[i].id,
            student_name: students[i].name,
            conflicting_class_session_ids: []
        });
        //checking this variable prevents conflicting classes sets from being redundant
        var latest_class_with_conflict = 0;
        //check from both ends
        var start_index = 0;
        var end_index = 0;
        //if the client is enrolled in enough classes to check
        if(schedules[i].enrolled_classes.length > 1) {
            while (start_index < schedules[i].enrolled_classes.length - 1) {
                end_index = schedules[i].enrolled_classes.length - 1;
                var done = false;
                while(end_index > start_index && end_index > latest_class_with_conflict && !done) {
                    //check if class times overlap
                    if((schedules[i].enrolled_classes[end_index].start < schedules[i].enrolled_classes[start_index].
                            end)) {
                        conflicts[i].conflicting_class_session_ids.push([]);
                        var current_set_index = conflicts[i].conflicting_class_session_ids.length - 1;
                        for(var j = start_index; j <= end_index; j++) {
                            //add overlapping class to set
                            conflicts[i].conflicting_class_session_ids[current_set_index].push(
                                schedules[i].enrolled_classes[j].id);
                        }
                        done = true;
                        latest_class_with_conflict = end_index;
                    }
                    else {
                        end_index--;
                    }
                }
                start_index++;
            }
        }
    }
	
    return conflicts;
}

function printScheduleConflicts(conflicts){
	for(var i = 0; i < conflicts.length; i++){
		console.log(conflicts[i].student_id + " " + conflicts[i].student_name)
		for(var j = 0; j < conflicts[i].conflicting_class_session_ids.length; j++){
			console.log(conflicts[i].conflicting_class_session_ids[j]);
		}
	}
}

var schedules = makeStudentSchedules(students, class_sessions);
printSchedules(schedules);
var conflicts = findScheduleConflicts(schedules);
printScheduleConflicts(conflicts);