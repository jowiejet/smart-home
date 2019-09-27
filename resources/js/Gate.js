export default class Gate{

    construct(user){
        this.user = user;
    }

    isAdmin(){
        return this.user.access === 'admin';
    }

    isParent(){
        return this.user.access === 'parent';
    }

    isChildren(){
        return this.user.access === 'children';
    }

    isGuest(){
        return this.user.access === 'guest';
    }
}