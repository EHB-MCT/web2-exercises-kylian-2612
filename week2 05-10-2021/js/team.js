class Team{


    constructor(){
        this.teamName = 'Default team';
        this.trainerName = 'Ash';
        this.roster = [];
    }
    
    describe() {
        return `Team ${this.teamName} with trainer ${this.trainerName}
            has the following pokemon: ${[...this.roster]}`;   
    }


}




export default Team;