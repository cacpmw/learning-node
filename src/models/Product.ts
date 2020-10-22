import mongoose from 'mongoose'
import mongoosePaginate from 'mongoose-paginate'

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },

    created_at: {
        type: Date,
        default: Date.now
    }
})
ProductSchema.plugin(mongoosePaginate)
export default mongoose.model('Product',ProductSchema)