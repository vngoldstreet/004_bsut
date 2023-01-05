export interface AllMenus {
    id: number
    owner: string
    value: string
    title: string
    maintitle: string
}

export interface TypePost {
    id: number
    owner: string
    value: string
    title: string
    maintitle: string
}

export interface Previews {
    title: string
    descrip: string
    thumb: string
    url:string
    viewer:number
    created_at:string
}

export interface Sliders {
    id:number
    image: string
    owner:string
    title:string
    descrip: string
}

export interface Contents {
    title: string
    descrip: string
    image: string
    url:string
    content:string
    created_at:string
    type:string
    viewer:string
    keyword:string
}


export interface Doctors {
    name:string
    job:string
    desc:string
    image:string
}

export interface ExaminationSchedules {
   name:string
   phone:string
   dateofbirth:string
   address:string
   content:string
   status_1:string
   status_2:string
}
