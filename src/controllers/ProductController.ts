import mongoose from 'mongoose'
import { Request, Response } from 'express'
import '../models/Product'

const Product = mongoose.model('Product')

export default {
    async index(request: Request, response: Response) {
        let pageParameter = 1
        pageParameter = Number(request.query.page)
        return response.status(200).json(await Product.paginate({}, { page: pageParameter, limit: 10 }))
    },

    async show(request: Request, response: Response) {
        const id = request.params.id
        return response.status(200).json(await Product.find({
            _id: id
        }))
    },

    async store(request: Request, response: Response) {
        const newProduct = await Product.create(request.body)
        return response.status(201).json(newProduct)
    },
    async update(request: Request, response: Response) {
        const updatedProduct = await Product.findByIdAndUpdate(request.params.id, request.body, { new: true, useFindAndModify: false })
        return response.status(200).json(updatedProduct)
    },

    async destroy(request: Request, response: Response) {
        await Product.findByIdAndRemove({ _id: request.params.id, useFindAndModify: false });
        return response.status(200).send()
    }
}