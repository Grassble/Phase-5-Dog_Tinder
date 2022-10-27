# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)


a1 = Activity.create(active: 1, name: "Low Activity")
a2 = Activity.create(active: 2, name: "Some Activity")
a3 = Activity.create(active: 3, name: "Medium Activity")
a4 = Activity.create(active: 4, name: "More Activity")
a5 = Activity.create(active: 5, name: "Heavy Activity")

bassetHound = Breed.create(name: "Basset Hound", activity_id: a2.id)
beagle = Breed.create(name: "Beagle", activity_id: a4.id)
border = Breed.create(name: "Border Collie", activity_id: a5.id)
bostinTerrier = Breed.create(name: "Boston Terrier", activity_id: a3.id)
bulldog = Breed.create(name: "Bulldog", activity_id: a2.id)
chow = Breed.create(name: "Chow Chow", activity_id: a3.id)
cocker = Breed.create(name: "Cocker Spaniel", activity_id: a3.id)
dachshund = Breed.create(name: "Dachshund", activity_id: a3.id)
english = Breed.create(name: "English Setter", activity_id: a5.id)
french = Breed.create(name: "French Bulldog", activity_id: a2.id)
german = Breed.create(name: "German Shepherd", activity_id: a4.id)
golden = Breed.create(name: "Golden Retriever", activity_id: a4.id)
husky = Breed.create(name: "Husky", activity_id: a4.id)
irish = Breed.create(name: "Irish Setter", activity_id: a5.id)
jackRussell = Breed.create(name: "Jack Russell Terrier", activity_id: a5.id)
nova = Breed.create(name: "Nova Scotia Duck-Tolling Retriever", activity_id: a5.id)
pomeranian = Breed.create(name: "Pomeranian", activity_id: a3.id)
portuguese = Breed.create(name: "Portuguese Water Dog", activity_id: a4.id)
pug = Breed.create(name: "Pug", activity_id: a1.id)
rotty = Breed.create(name: "Rottweiler", activity_id: a4.id)
saint = Breed.create(name: "Saint Bernard", activity_id: a3.id)
shiba = Breed.create(name: "Shiba Inu", activity_id: a3.id)
vizsla = Breed.create(name: "Vizsla", activity_id: a5.id)
yorkshire = Breed.create(name: "Yorkshire Terrier", activity_id: a4.id)



memphis = Shelter.create(name: "Humane Society of Memphis and Shelby County", address: "935 Farm Rd")
oxford = Shelter.create(name: "Oxford Animal Resource Center", address: "413 McElroy Dr")
nyc = Shelter.create(name: "The Humane Society of New York", address: "306 E 59th St")
dallas = Shelter.create(name: "Humane Society of Dallas", address: "2719 Manor Way")
miami = Shelter.create(name: "Humane Society of Greater Miami", address: "16101 W Dixie Hwy")
charleston = Shelter.create(name: "Charleston Animal Society", address: "2455 Remount Rd")
atlanta = Shelter.create(name: "Atlanta Humane Society", address: "1551 Perry Blvd")
jackson = Shelter.create(name: "Mississippi Animal Rescue", address: "5221 Greenway Dr Exd")
cleveland = Shelter.create(name: "Little River Pet Resort", address: "26479 Royalton Rd")


john = Employee.create(name: "John Doe", job: "Kennel Attendant")
pete = Employee.create(name: "Peter Pan", job: "Kennel Attendant")
bob = Employee.create(name: "Bob Smith", job: "Manager")
tina = Employee.create(name: "Tina Taylor", job: "Nurse")

none = Foster.create(name: "N/A", address: "N/A")
peyton = Foster.create(name: "Peyton Harrison", address: "272 Alexander Street")
mark = Foster.create(name: "Mark Markowski", address: "157 Street Blvd")
sara = Foster.create(name: "Sara Louise", address: "588 Real Place")

Dog.create(name: "Roofus", breed_id: golden.id, shelter_id: memphis.id, employee_id: john.id, foster_id: none.id, image: "https://cdn.pixabay.com/photo/2016/02/19/15/46/labrador-retriever-1210559__480.jpg")
Dog.create(name: "Biscuit", breed_id: pomeranian.id, shelter_id: atlanta.id, employee_id: john.id, foster_id: peyton.id, image: "https://inspirationseek.com/wp-content/uploads/2014/09/Pomeranian-Dog-Pictures.jpg")
Dog.create(name: "Steve", breed_id: rotty.id, shelter_id: miami.id, employee_id: john.id, foster_id: sara.id, image: "https://puffandfluffspa.com/wp-content/uploads/2017/08/Depositphotos_1979239_m-2015.jpg")
Dog.create(name: "Lisa", breed_id: beagle.id, shelter_id: dallas.id, employee_id: john.id, foster_id: none.id, image: "https://th.bing.com/th/id/OIP.heldT27pSIEU23YkqPNhgwHaFW?pid=ImgDet&rs=1")
Dog.create(name: "Rex", breed_id: nova.id, shelter_id: oxford.id, employee_id: john.id, foster_id: mark.id, image: "https://th.bing.com/th/id/OIP.342EuK-wcSfBSg237hRVrAHaEo?pid=ImgDet&rs=1")
Dog.create(name: "Sebastion", breed_id: irish.id, shelter_id: cleveland.id, employee_id: pete.id, foster_id: peyton.id, image: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2021%2F09%2F21%2Firish-setter-lying-on-fence-145076420-2000.jpg")
Dog.create(name: "Peanut", breed_id: border.id, shelter_id: dallas.id, employee_id: tina.id, foster_id: none.id, image: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2021%2F03%2F02%2Fborder-collie-green-field-268313239-2000.jpeg")

User.create(username: "Peyton", password: "Project")
