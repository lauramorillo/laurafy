FROM mongo:4.0

COPY init.json /init.json

CMD mongoimport --host mongo --db laurafy --collection songs --type json --file /init.json --jsonArray
