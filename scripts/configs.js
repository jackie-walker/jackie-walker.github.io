/**
 * Script to hold configuration values
 */

export let category_1_values = ['American', 'Asian', 'British', 'Dutch', 'European', 'Fast Food', 'French', 'Fusion', 'German', 'Greek', 'Home Baker', 'Home Based', 'South Indian', 'North Indian', 'Iranian', 'Italian', 'Jaffna', 'Japanese', 'Korean', 'Mainland Chinese', 'Mediterranean', 'Mexican', 'Mongolian', 'Pakistani', 'Swiss', 'South-East Asian', 'Spanish', 'Sri Lankan', 'Sri Lankan Chinese', 'Vietnamese', 'Syrian', 'Thai', 'Western']
export let category_2_values = ['Rice', 'Burger', 'Pizza', 'Pasta', 'BBQ', 'Fruit Juice', 'Biriyani', 'Bites', 'Cakes', 'Coffee', 'Dosa', 'Desserts', 'Bubble Tea', 'Street Food', 'Roti', 'Soup', 'Noodles', 'Short eats', 'Indian Sweets', 'Bread', 'Sandwiches', 'Shawarma', 'Sushi', 'Fast Food/Franchise', 'Ice Cream', 'Yoghurt', 'Shakes', 'Waffles', 'Shellfish', 'Seafood']
export let category_3_values = ['Chicken', 'Beef', 'Mutton', 'Pork', 'Lamb', 'Quail', 'Eggs', 'Vegan', 'Vegetarian', 'Crab', 'Healthy', 'Turkey', 'Duck', 'Cuttlefish', 'Prawns', 'Gluten-free', 'Lactose Intolerant', 'Milk', 'Nuts']
export let category_4_values = ['Spicy', 'Cheesy', 'Sweet', 'Pickles']
export let category_5_values = ['Breakfast', 'Lunch', 'Dinner', 'Brunch', 'Snacks']
export let hidden_column_indexes = [0, 2, 3, 4, 6, 7, 8, 9]
export let column_headers_user = ['ItemId', 'ItemName', 'ItemLabel', 'CreatedDatetime', 'UpdatedDatetime', 'RestaurantId', 'MenuCatId', 'DeliveryEnabled', 'isAvailable', 'LastUpdatedDate', 'Category1', 'Category2', 'Category3', 'Category4', 'Category5']
export let column_headers_admin = ['ItemId', 'ItemName', 'ItemLabel', 'CreatedDatetime', 'UpdatedDatetime', 'RestaurantId', 'MenuCatId', 'DeliveryEnabled', 'isAvailable', 'LastUpdatedDate', 'Category1', 'Category2', 'Category3', 'Category4', 'Category5', 'Verified']
export let columns_user = [
    {
        editor: false
    }, {
        editor: false
    }, {
        editor: false
    }, {
        editor: false
    }, {
        editor: false
    }, {
        editor: false
    }, {
        editor: false
    }, {
        editor: false
    }, {
        editor: false
    }, {
        editor: false
    },
    {
        type: 'dropdown',
        source: category_1_values,
        trimDropdown: false
    },
    {
        type: 'dropdown',
        source: category_2_values,
        trimDropdown: false
    },
    {
        type: 'dropdown',
        source: category_3_values,
        trimDropdown: false
    },
    {
        type: 'dropdown',
        source: category_4_values,
        trimDropdown: false
    },
    {
        type: 'dropdown',
        source: category_5_values,
        trimDropdown: false
    }
]
export let columns_admin = columns_user.concat([
    {
        type: 'dropdown',
        source: ['Yes', 'No']
    }
]);
export let hands_on_table_license = 'non-commercial-and-evaluation'
export let csv_validation_value = ',,,,,'
