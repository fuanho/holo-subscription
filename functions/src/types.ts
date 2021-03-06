import { LiveInfo } from 'holo-schedule'
import { firestore } from 'firebase-admin'

export type ScheduleItem = LiveInfo

export interface ScheduleItemFromDb extends Omit<ScheduleItem, 'time'> {
  time: firestore.Timestamp
}

export interface Subscription {
  vtuber: string
  chatId: number
}

export interface IncomingNotification {
  liveId: string
  created: Date
}

export interface IncomingNotificationFromDb extends Omit<IncomingNotification, 'created'> {
  created: firestore.Timestamp
}

export interface UserConfig {
  chatId: number
  zone: string
}
