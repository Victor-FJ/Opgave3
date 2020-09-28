new Vue({
    // TypeScript compiler complains about Vue because the CDN link to Vue is in the html file.
    // Before the application runs this TypeScript file will be compiled into bundle.js
    // which is included at the bottom of the html file.
    el: "#app",
    data: {
        input: "",
        operation: "Up",
        result: ""
    },
    methods: {
        manipulate() {
            switch (this.operation) {
                case "Up":
                    this.result = this.input.toUpperCase()
                    console.log("To Upper")
                    break;
                case "Lo":
                    this.result = this.input.toLowerCase()
                    console.log("To Lower")
                    break;
                case "UpLoUp":
                    this.result = ""
                    for (var i = 0; i < this.input.length; i++)
                    {
                        if (this.input[i] == this.input[i].toUpperCase())
                            this.result += this.input[i].toLowerCase()
                        else
                            this.result += this.input[i].toUpperCase()
                    }
                    console.log("Upper To Lower To Upper")
                    break;
                case "Bac":
                    this.result = ""
                    for (var i = parseInt(this.input.length) - 1; i >= 0; i--)
                        this.result += this.input[i]
                    console.log("Backwards")
                    break;
            
                default:
                    break;
            }
        }
    }
})