import { GetFeedResponseInterface } from "./getFeedResponse";



export interface FeedStateInterface{
    isLoading: boolean,
    data: GetFeedResponseInterface | null,
    error: string | null,
}