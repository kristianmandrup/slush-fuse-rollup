(defproject <%= appName %> "0.1.0"
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.9.89"]]
  :plugins [[lein-figwheel "0.5.4-7"]]
  :clean-targets [:target-path "dist"]
  :cljsbuild {}
    :builds [{:id "dev"
              :source-paths ["cljs/src"]
              :figwheel true
              :compiler {:main "app.core"}}])
