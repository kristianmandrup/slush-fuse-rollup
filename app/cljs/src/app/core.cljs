(ns app.core)

(.log js/console "Hey wasup?!")

// module.exports hello variable
(set! (.-exports js/module) #js {:hello #(println "Hello from ClojureScript!")})
