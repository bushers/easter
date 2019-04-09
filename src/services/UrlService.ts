export class UrlService { 
    rules:any[];
    enabled:boolean;

    constructor(){
        this.init =this.init.bind(this);
        this.execute = this.execute.bind(this);
        this.addRule = this.addRule.bind(this);
        this.onChange = this.onChange.bind(this);
        this.enable = this.enable.bind(this);
        this.disable = this.disable.bind(this);
        this.setHash = this.setHash.bind(this);
        this.rules = [];
        this.enabled = true;
    }

    init(){
        this.onChange();
    }

    execute(hash){
        this.rules.forEach(function(e){
            hash.replace(e.regex,function(){
                var args = Array.prototype.slice.call(arguments,0);
                args = args.slice(1); 
                e.fn.apply(this, args); 
            });
        });  
    }

    addRule(regex,callback){
        this.rules.push({regex:regex,fn:callback}); 
    }

    onChange(){
        var hash = location.hash.slice(1);
        this.execute(hash); 
    }

    enable(){
        this.enabled = true;
    }

    disable(){
        this.enabled = false;
    }

    setHash(newHash){
        this.disable();
        location.hash = newHash;
        this.enable();
    }
}