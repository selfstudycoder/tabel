import {
  Component,
  OnInit
} from '@angular/core';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  allStudents = [{
      "name": "Reza jafari",
      "math": 13,
      "science": 14,
      "chemistery": 15,
      "sport": 16
    },
    {
      "name": "Javad rezayi",
      "math": 13.5,
      "science": 15,
      "chemistery": 15.5,
      "sport": 16
    },
    {
      "name": "Zahra mohseny",
      "math": 16,
      "science": 14.5,
      "chemistery": 20,
      "sport": 17
    },
    {
      "name": "Ali khabbaz",
      "math": 20,
      "science": 20,
      "chemistery": 18,
      "sport": 19
    },
    {
      "name": "Sadeg hedayat",
      "math": 15,
      "science": 17,
      "chemistery": 13,
      "sport": 19
    },
    {
      "name": "Mohsen tagizadeh",
      "math": 13,
      "science": 14,
      "chemistery": 15,
      "sport": 16
    },
    {
      "name": "Hasan zafari",
      "math": 13,
      "science": 14,
      "chemistery": 15,
      "sport": 16
    },
    {
      "name": "Namet bageri",
      "math": 13,
      "science": 14,
      "chemistery": 15,
      "sport": 16
    },
  ]

  whichDir: string = '';
  searchName: string;
  students;


  
 
  sortBy(value: string, dir: string) { 
    if (this.cheakDirAscy(dir) === -1) {
      console.log("ascending")
      this.students = this.students.sort((a:any, b:any) => {
        if (a[value] > b[value]) {
          return 1
        } else if (a[value] < b[value]) {
          return -1
        } else {
          return 0
        }
      })
    } else if (this.cheakDirDescy(dir) === 1) {
      console.log("decending")
      this.students = this.students.sort((a: any, b: any) => {
        if (a[value] > b[value]) {
          return -1
        } else if (a[value] < b[value]) {
          return 1
        } else {
          return 0
        }
      })

    }


  }

  sortType(value: string, dir: string) {
    switch (value) {
      case 'name':
        this.sortBy(value, dir);
        break;
      case 'math':
        this.sortBy(value, dir);
        break;
      case 'science':
        this.sortBy(value, dir)  
        break;
      case 'chemistery':
        this.sortBy(value, dir)
        break;
      case 'sport':
        this.sortBy(value, dir)  
        break
    } 

  }

  // always pass 'ascy' string when called
  cheakDirAscy(dir: string) {
    if ((this.whichDir === "") || (this.whichDir === "descy")) {
      console.log('before assign dir', 'whichdir is ' + this.whichDir)
      this.whichDir = dir;
      console.log('after assign dir', `whichdir is ` + this.whichDir)
      return -1;
    }

  }
// alwyas pass 'ascy' string when called
  cheakDirDescy(dir: string) {
    if (this.whichDir === dir) {
      this.whichDir = 'descy';
      return 1
    }
  }

  // sortByNameAscy(a: any, b: any) {
  //   if (a.math > b.math) {
  //     return 1
  //   } else if (a.math < b.math) {
  //     return -1
  //   } else {
  //     return 0
  //   }
  // }

  // sortByNameDescy(a: any, b: any) {
  //   if (a.math > b.math) {
  //     return -1
  //   } else if (a.math < b.math) {
  //     return 1
  //   } else {
  //     return 0
  //   }
  // }

  // sortByNameAscy(a: any, b: any) {
  //   if (a.name > b.name) {
  //     return 1
  //   } else if (a.name < b.name) {
  //     return -1
  //   } else {
  //     return 0
  //   }
  // }

  // sortByNameDescy(a: any, b: any) {
  //   if (a.name > b.name) {
  //     return -1
  //   } else if (a.name < b.name) {
  //     return 1
  //   } else {
  //     return 0
  //   }
  // }

  ngOnInit() {
    this.students = this.allStudents;
  }

  search() {
    if (this.searchName != "") {
      this.students = this.students.filter(res => {
        return res.name.toLowerCase().match(this.searchName.toLowerCase());
      })

    } else {
      this.ngOnInit();
    }

  }


}
