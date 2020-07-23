import pymongo


class Storage:
    client = pymongo.MongoClient(
        "mongodb://admin:adminadmin1@ds014388.mlab.com:14388/?authSource=tiktokbot&retryWrites=false")
    db = client["tiktokbot"]
    mycol = db["customers"]

    def __init__(self):
        self.client = pymongo.MongoClient(
            "mongodb://admin:adminadmin1@ds014388.mlab.com:14388/?authSource=tiktokbot&retryWrites=false")
        self.db = self.client["tiktokbot"]
        self.mycol = self.db["customers"]

    def inSert(self):

        mylist = [
            {"name": "Amy", "address": "Apple st 652"},
            {"name": "Hannah", "address": "Mountain 21"},
            {"name": "Michael", "address": "Valley 345"},
            {"name": "Sandy", "address": "Ocean blvd 2"},
            {"name": "Betty", "address": "Green Grass 1"},
            {"name": "Richard", "address": "Sky st 331"},
            {"name": "Susan", "address": "One way 98"},
            {"name": "Amy", "address": "Yellow Garden 2"},
            {"name": "Ben", "address": "Park Lane 38"},
            {"name": "William", "address": "Central st 954"},
            {"name": "Chuck", "address": "Main Road 989"},
            {"name": "Viola", "address": "Sideway 1633"}
        ]

        x = self.mycol.insert_many(mylist)
        print(x.inserted_ids)

    def find(self):
        myquery = {"name": "Amy"}

        mydoc = self.mycol.find(myquery)

        for x in mydoc:
            print(x)


if __name__ == "__main__":
    Storage().inSert()
    Storage().find()
