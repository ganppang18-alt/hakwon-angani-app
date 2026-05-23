import React, { useEffect, useMemo, useState } from "react";
import {
  AlertTriangle,
  Bell,
  CalendarDays,
  CheckCircle2,
  Clock,
  Copy,
  Home,
  Info,
  KeyRound,
  ListChecks,
  Lock,
  LogOut,
  MapPin,
  Navigation,
  Phone,
  Pencil,
  Plus,
  RotateCcw,
  Save,
  Share2,
  SlidersHorizontal,
  Smartphone,
  Trash2,
  Unlock,
  UserCog,
  UserRound,
  Volume2,
  X,
} from "lucide-react";
import { motion } from "framer-motion";

const appFontFamily = "Jua, ui-rounded, system-ui, -apple-system, BlinkMacSystemFont, sans-serif";

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Card({ className = "", children }) {
  return <div className={className}>{children}</div>;
}

function CardContent({ className = "", children }) {
  return <div className={className}>{children}</div>;
}

function Button({ className = "", variant = "default", size = "default", disabled, children, ...props }) {
  const base = "inline-flex items-center justify-center font-bold transition disabled:pointer-events-none disabled:opacity-50";
  const variants = {
    default: "bg-rose-400 text-white hover:bg-rose-500",
    secondary: "bg-rose-50 text-rose-900 hover:bg-rose-100",
    outline: "border border-rose-100 bg-white text-slate-700 hover:bg-rose-50",
    danger: "bg-red-500 text-white hover:bg-red-600",
  };
  const sizes = {
    default: "px-4 py-2",
    sm: "px-3 py-2 text-xs",
  };

  return (
    <button
      className={cn(base, variants[variant] || variants.default, sizes[size] || sizes.default, className)}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}

const defaultFamilyInfo = {
  parents: [
    { id: "dad", label: "아빠", name: "아빠", phone: "01088337590" },
    { id: "mom", label: "엄마", name: "엄마", phone: "01027460913" },
  ],
  children: [
    { id: "donghun", name: "동훈", grade: "초5", phone: "", avatarTheme: "rose" },
    { id: "dongjun", name: "동준", grade: "초3", phone: "", avatarTheme: "sky" },
  ],
};

const children = defaultFamilyInfo.children;

const defaultSchedules = [
  {
    id: 1,
    childId: "dongjun",
    day: "월",
    title: "한국사",
    place: "한국사 수업 장소",
    address: "장소를 입력해주세요",
    start: "14:00",
    end: "15:00",
    status: "대기",
    transport: "이동방법 입력 필요",
    items: "준비물 확인 필요",
    alert: "10분 전",
  },
  {
    id: 2,
    childId: "dongjun",
    day: "월",
    title: "파워점핑",
    place: "파워점핑",
    address: "장소를 입력해주세요",
    start: "16:30",
    end: "17:30",
    status: "대기",
    transport: "이동방법 입력 필요",
    items: "운동복, 물병",
    alert: "15분 전",
  },
  {
    id: 3,
    childId: "dongjun",
    day: "화",
    title: "바둑",
    place: "바둑 수업 장소",
    address: "장소를 입력해주세요",
    start: "14:00",
    end: "15:00",
    status: "대기",
    transport: "이동방법 입력 필요",
    items: "준비물 확인 필요",
    alert: "10분 전",
  },
  {
    id: 4,
    childId: "dongjun",
    day: "수",
    title: "바둑",
    place: "바둑 수업 장소",
    address: "장소를 입력해주세요",
    start: "14:00",
    end: "15:00",
    status: "대기",
    transport: "이동방법 입력 필요",
    items: "준비물 확인 필요",
    alert: "10분 전",
  },
  {
    id: 5,
    childId: "dongjun",
    day: "수",
    title: "파워점핑",
    place: "파워점핑",
    address: "장소를 입력해주세요",
    start: "16:30",
    end: "17:30",
    status: "대기",
    transport: "이동방법 입력 필요",
    items: "운동복, 물병",
    alert: "15분 전",
  },
  {
    id: 6,
    childId: "dongjun",
    day: "목",
    title: "파워점핑",
    place: "파워점핑",
    address: "장소를 입력해주세요",
    start: "16:30",
    end: "17:30",
    status: "대기",
    transport: "이동방법 입력 필요",
    items: "운동복, 물병",
    alert: "15분 전",
  },
  {
    id: 7,
    childId: "donghun",
    day: "월",
    title: "영어",
    place: "영어 수업 장소",
    address: "장소를 입력해주세요",
    start: "16:00",
    end: "17:00",
    status: "대기",
    transport: "이동방법 입력 필요",
    items: "영어 교재, 필통",
    alert: "10분 전",
  },
  {
    id: 8,
    childId: "donghun",
    day: "월",
    title: "파워점핑",
    place: "파워점핑",
    address: "장소를 입력해주세요",
    start: "18:20",
    end: "19:20",
    status: "대기",
    transport: "이동방법 입력 필요",
    items: "운동복, 물병",
    alert: "15분 전",
  },
  {
    id: 9,
    childId: "donghun",
    day: "화",
    title: "영어",
    place: "영어 수업 장소",
    address: "장소를 입력해주세요",
    start: "16:00",
    end: "17:00",
    status: "대기",
    transport: "이동방법 입력 필요",
    items: "영어 교재, 필통",
    alert: "10분 전",
  },
  {
    id: 10,
    childId: "donghun",
    day: "화",
    title: "파워점핑",
    place: "파워점핑",
    address: "장소를 입력해주세요",
    start: "18:20",
    end: "19:20",
    status: "대기",
    transport: "이동방법 입력 필요",
    items: "운동복, 물병",
    alert: "15분 전",
  },
  {
    id: 11,
    childId: "donghun",
    day: "수",
    title: "영어",
    place: "영어 수업 장소",
    address: "장소를 입력해주세요",
    start: "16:00",
    end: "17:00",
    status: "대기",
    transport: "이동방법 입력 필요",
    items: "영어 교재, 필통",
    alert: "10분 전",
  },
  {
    id: 12,
    childId: "donghun",
    day: "수",
    title: "파워점핑",
    place: "파워점핑",
    address: "장소를 입력해주세요",
    start: "18:20",
    end: "19:20",
    status: "대기",
    transport: "이동방법 입력 필요",
    items: "운동복, 물병",
    alert: "15분 전",
  },
  {
    id: 13,
    childId: "donghun",
    day: "목",
    title: "영어",
    place: "영어 수업 장소",
    address: "장소를 입력해주세요",
    start: "16:00",
    end: "17:00",
    status: "대기",
    transport: "이동방법 입력 필요",
    items: "영어 교재, 필통",
    alert: "10분 전",
  },
  {
    id: 14,
    childId: "donghun",
    day: "목",
    title: "파워점핑",
    place: "파워점핑",
    address: "장소를 입력해주세요",
    start: "18:20",
    end: "19:20",
    status: "대기",
    transport: "이동방법 입력 필요",
    items: "운동복, 물병",
    alert: "15분 전",
  },
  {
    id: 15,
    childId: "donghun",
    day: "금",
    title: "영어",
    place: "영어 수업 장소",
    address: "장소를 입력해주세요",
    start: "16:00",
    end: "17:00",
    status: "대기",
    transport: "이동방법 입력 필요",
    items: "영어 교재, 필통",
    alert: "10분 전",
  },
  {
    id: 16,
    childId: "donghun",
    day: "금",
    title: "파워점핑",
    place: "파워점핑",
    address: "장소를 입력해주세요",
    start: "18:20",
    end: "19:20",
    status: "대기",
    transport: "이동방법 입력 필요",
    items: "운동복, 물병",
    alert: "15분 전",
  },
];

const statusStyle = {
  "이동 전": "bg-slate-100 text-slate-700",
  대기: "bg-blue-100 text-blue-700",
  "이동 중": "bg-orange-100 text-orange-700",
  "도착 완료": "bg-green-100 text-green-700",
  "귀가 완료": "bg-emerald-100 text-emerald-700",
  "위치 확인": "bg-cyan-100 text-cyan-700",
  "수업 중": "bg-purple-100 text-purple-700",
  끝남: "bg-zinc-100 text-zinc-500",
  미확인: "bg-red-100 text-red-700",
};

const days = ["월", "화", "수", "목", "금", "토", "일"];

// 가족 전체가 같은 일정을 보려면 Firebase Realtime Database 주소를 입력하세요.
// 예: "https://hakwon-angani-default-rtdb.asia-southeast1.firebasedatabase.app"
// 주소를 비워두면 기존처럼 각 휴대폰에만 저장됩니다.
const FIREBASE_DATABASE_URL = "https://hakwon-angani-default-rtdb.firebaseio.com";
const DEFAULT_FAMILY_SHARE_CODE = "han-family";

function isCloudSyncEnabled() {
  return FIREBASE_DATABASE_URL.trim().length > 0;
}

function getCloudUrl(familyShareCode = DEFAULT_FAMILY_SHARE_CODE) {
  const baseUrl = FIREBASE_DATABASE_URL.endsWith("/") ? FIREBASE_DATABASE_URL.slice(0, -1) : FIREBASE_DATABASE_URL;
  const safeCode = encodeURIComponent(String(familyShareCode || DEFAULT_FAMILY_SHARE_CODE).trim());
  return baseUrl + "/families/" + safeCode + ".json";
}

function normalizeFamilyCode(value) {
  const raw = String(value || "").trim().split(" ").filter(Boolean).join("-");
  const allowed = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789가나다라마바사아자차카타파하거너더러머버서어저처커터퍼허고노도로모보소오조초코토포호구누두루무부수우주추쿠투푸후그느드르므브스으즈츠크트프흐기니디리미비시이지치키티피히_-";
  return raw
    .split("")
    .filter((char) => allowed.includes(char))
    .join("")
    .slice(0, 30);
}

function loadSavedFamilyShareCode() {
  try {
    if (typeof localStorage === "undefined") return DEFAULT_FAMILY_SHARE_CODE;
    return localStorage.getItem("hakwonFamilyShareCode") || DEFAULT_FAMILY_SHARE_CODE;
  } catch {
    return DEFAULT_FAMILY_SHARE_CODE;
  }
}

function saveFamilyShareCodeToStorage(code) {
  try {
    if (typeof localStorage !== "undefined") {
      localStorage.setItem("hakwonFamilyShareCode", code);
    }
  } catch {
    // 저장 공간이 막힌 환경에서는 화면 상태만 유지합니다.
  }
}

function timeToMinutes(time) {
  if (!time || !time.includes(":")) return 0;
  const [h, m] = time.split(":").map(Number);
  if (Number.isNaN(h) || Number.isNaN(m)) return 0;
  return h * 60 + m;
}

function alertToMinutes(alertText) {
  const numberOnly = String(alertText || "10").replace(/[^0-9]/g, "");
  return numberOnly ? Number(numberOnly) : 10;
}

function getNowMinutes(now = new Date()) {
  return now.getHours() * 60 + now.getMinutes();
}

function getTodayKoreanDay(now = new Date()) {
  const index = now.getDay();
  return ["일", "월", "화", "수", "목", "금", "토"][index];
}

function getTodayDateLabel(now = new Date()) {
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const date = now.getDate();
  const day = getTodayKoreanDay(now);
  return `${year}년 ${month}월 ${date}일 ${day}요일`;
}

function getDateKey(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function getMondayOfWeek(date = new Date()) {
  const base = new Date(date);
  const day = base.getDay();
  const diff = day === 0 ? -6 : 1 - day;
  base.setDate(base.getDate() + diff);
  base.setHours(0, 0, 0, 0);
  return base;
}

function addDays(date, amount) {
  const next = new Date(date);
  next.setDate(next.getDate() + amount);
  return next;
}

function isTomorrowDate(date) {
  return getDateKey(date) === getDateKey(addDays(new Date(), 1));
}

function isTodayDate(date) {
  return getDateKey(date) === getDateKey(new Date());
}

function isFutureDate(date) {
  const target = new Date(date);
  const today = new Date();
  target.setHours(0, 0, 0, 0);
  today.setHours(0, 0, 0, 0);
  return target.getTime() > today.getTime();
}

function getNoScheduleTitle(date) {
  if (isTomorrowDate(date)) return "내일은 어떤 재밌는 일이 생길까요?";
  if (isTodayDate(date)) return "오늘은 여유 시간이 있어요";
  if (isFutureDate(date)) return "이날은 어떤 좋은 일이 기다릴까요?";
  return "이날 일정은 모두 지나갔어요";
}

function getNoScheduleDescription(date) {
  if (isTomorrowDate(date)) return "아직 일정이 없어도 괜찮아요. 내일의 즐거운 순간을 기대해봐요.";
  if (isTodayDate(date)) return "학원 일정이 없는 날에는 스스로 할 일을 하나 골라보면 멋져요.";
  if (isFutureDate(date)) return "새로운 하루를 위해 작은 계획을 떠올려보는 것도 좋아요.";
  return "지난 일정은 홈 화면에서 숨기고, 오늘 할 일에 집중해요.";
}

function isPastDate(date) {
  const target = new Date(date);
  const today = new Date();
  target.setHours(0, 0, 0, 0);
  today.setHours(0, 0, 0, 0);
  return target.getTime() < today.getTime();
}

function getParentPastPraise(childName, selectedDay) {
  const name = childName || "우리 아이";
  const messages = {
    월: {
      title: "월요일도 씩씩하게 잘 해냈어",
      desc: `한 주의 시작을 보낸 ${name}에게 따뜻한 칭찬을 전해주세요. 월요일을 잘 지나온 것만으로도 충분히 멋진 일이에요.`,
      quote: `“${name}아, 월요일을 씩씩하게 시작해줘서 고마워. 이번 주도 엄마 아빠가 늘 응원할게.”`,
    },
    화: {
      title: "화요일도 차근차근 잘했어",
      desc: `${name}가 하루를 차근차근 보내온 것을 기억해주세요. 작은 노력도 부모님의 칭찬을 받을 만큼 소중합니다.`,
      quote: `“${name}아, 오늘도 하나씩 해낸 네 모습이 정말 자랑스러워.”`,
    },
    수: {
      title: "수요일까지 정말 잘 달려왔어",
      desc: `한 주의 중간까지 온 ${name}에게 잠깐 쉬어가도 괜찮다는 말을 전해주세요.`,
      quote: `“${name}아, 벌써 한 주의 중간까지 왔네. 지치지 않고 해낸 네가 참 대견해.”`,
    },
    목: {
      title: "목요일도 포기하지 않고 잘했어",
      desc: `${name}가 지칠 수 있는 날에도 자기 할 일을 해낸 점을 칭찬해주세요.`,
      quote: `“${name}아, 힘들어도 포기하지 않고 해낸 오늘의 네가 정말 멋져.”`,
    },
    금: {
      title: "금요일까지 멋지게 해냈어",
      desc: `한 주를 잘 마무리해가는 ${name}에게 충분한 인정과 격려를 전해주세요.`,
      quote: `“${name}아, 이번 주도 정말 수고 많았어. 오늘의 너는 충분히 칭찬받아도 돼.”`,
    },
    토: {
      title: "토요일도 알차게 잘 보냈어",
      desc: `쉬는 날에도 자기만의 시간을 보낸 ${name}에게 따뜻한 말을 남겨주세요.`,
      quote: `“${name}아, 오늘 하루도 너답게 잘 보내줘서 고마워. 편안하게 쉬어도 괜찮아.”`,
    },
    일: {
      title: "일요일은 마음을 채우는 날이야",
      desc: `새로운 한 주를 앞둔 ${name}에게 안심과 사랑을 전해주세요.`,
      quote: `“${name}아, 이번 주도 잘 지내줘서 고마워. 내일도 천천히, 너답게 시작하면 돼.”`,
    },
  };

  return messages[selectedDay] || {
    title: "오늘 하루도 정말 잘했어",
    desc: `${name}에게 따뜻한 칭찬 한마디를 남겨주세요. 지난 하루를 잘 보낸 것만으로도 충분히 멋진 일이에요.`,
    quote: `“${name}아, 오늘도 열심히 해줘서 고마워. 너의 하루를 엄마 아빠가 늘 응원해.”`,
  };
}

function isScheduleForSelectedDate(schedule, selectedDay, selectedDateKey) {
  if (schedule.dateKey) return schedule.dateKey === selectedDateKey;
  return schedule.day === selectedDay;
}

function getActiveAlerts(schedules, selectedChild, selectedDay, nowMinutes = getNowMinutes()) {
  return schedules
    .filter((s) => s.childId === selectedChild && s.day === selectedDay && s.status !== "끝남")
    .map((s) => {
      const startMinutes = timeToMinutes(s.start);
      const alertMinutes = alertToMinutes(s.alert);
      const diff = startMinutes - nowMinutes;
      return { ...s, diff, alertMinutes };
    })
    .filter((s) => s.diff >= 0 && s.diff <= s.alertMinutes)
    .sort((a, b) => a.diff - b.diff);
}

function getCurrentSchedule(schedules, childId, selectedDay, nowMinutes = getNowMinutes()) {
  const childSchedules = schedules
    .filter((s) => s.childId === childId && s.day === selectedDay)
    .sort((a, b) => timeToMinutes(a.start) - timeToMinutes(b.start));

  if (childSchedules.length === 0) return null;

  const ongoing = childSchedules.find(
    (s) => nowMinutes >= timeToMinutes(s.start) && nowMinutes <= timeToMinutes(s.end)
  );
  if (ongoing) return ongoing;

  const next = childSchedules.find((s) => nowMinutes < timeToMinutes(s.start));
  return next || childSchedules[childSchedules.length - 1];
}

function getNextRemainingSchedule(schedules, nowMinutes = getNowMinutes(), excludeId = null) {
  return [...(schedules || [])]
    .filter((s) => s.id !== excludeId)
    .filter((s) => !["끝남", "귀가 완료"].includes(s.status))
    .filter((s) => timeToMinutes(s.start) > nowMinutes)
    .sort((a, b) => timeToMinutes(a.start) - timeToMinutes(b.start))[0] || null;
}

function loadSavedSchedules() {
  try {
    if (typeof localStorage === "undefined") return defaultSchedules;
    const saved = localStorage.getItem("hakwonSchedules");
    return saved ? JSON.parse(saved) : defaultSchedules;
  } catch {
    return defaultSchedules;
  }
}

function saveSchedulesToStorage(schedules) {
  try {
    if (typeof localStorage !== "undefined") {
      localStorage.setItem("hakwonSchedules", JSON.stringify(schedules));
    }
  } catch {
    // 저장 공간이 막힌 환경에서는 화면 상태만 유지합니다.
  }
}

function loadSavedAlertSetting() {
  try {
    if (typeof localStorage === "undefined") return "10분 전";
    return localStorage.getItem("hakwonDefaultAlert") || "10분 전";
  } catch {
    return "10분 전";
  }
}

function loadSavedNotificationEnabled() {
  try {
    if (typeof localStorage === "undefined") return true;
    const saved = localStorage.getItem("hakwonNotificationEnabled");
    return saved === null ? true : saved === "true";
  } catch {
    return true;
  }
}

function saveNotificationEnabledToStorage(enabled) {
  try {
    if (typeof localStorage !== "undefined") {
      localStorage.setItem("hakwonNotificationEnabled", String(enabled));
    }
  } catch {
    // 저장 공간이 막힌 환경에서는 화면 상태만 유지합니다.
  }
}

function saveAlertSettingToStorage(alertTime) {
  try {
    if (typeof localStorage !== "undefined") {
      localStorage.setItem("hakwonDefaultAlert", alertTime);
    }
  } catch {
    // 저장 공간이 막힌 환경에서는 화면 상태만 유지합니다.
  }
}

function loadSavedLocationChecks() {
  try {
    if (typeof localStorage === "undefined") return {};
    const saved = localStorage.getItem("hakwonLocationChecks");
    return saved ? JSON.parse(saved) : {};
  } catch {
    return {};
  }
}

function saveLocationChecksToStorage(locationChecks) {
  try {
    if (typeof localStorage !== "undefined") {
      localStorage.setItem("hakwonLocationChecks", JSON.stringify(locationChecks));
    }
  } catch {
    // 저장 공간이 막힌 환경에서는 화면 상태만 유지합니다.
  }
}

function loadSavedParentSecurity() {
  try {
    if (typeof localStorage === "undefined") return { password: "", lockEnabled: false };
    const saved = localStorage.getItem("hakwonParentSecurity");
    return saved ? JSON.parse(saved) : { password: "", lockEnabled: false };
  } catch {
    return { password: "", lockEnabled: false };
  }
}

function loadSavedFamilyInfo() {
  try {
    if (typeof localStorage === "undefined") return defaultFamilyInfo;
    const saved = localStorage.getItem("hakwonFamilyInfo");
    if (!saved) return defaultFamilyInfo;
    const parsed = JSON.parse(saved);
    return {
      parents: parsed.parents?.length ? parsed.parents : defaultFamilyInfo.parents,
      children: parsed.children?.length ? parsed.children : defaultFamilyInfo.children,
    };
  } catch {
    return defaultFamilyInfo;
  }
}

function saveFamilyInfoToStorage(familyInfo) {
  try {
    if (typeof localStorage !== "undefined") {
      localStorage.setItem("hakwonFamilyInfo", JSON.stringify(familyInfo));
    }
  } catch {
    // 저장 공간이 막힌 환경에서는 화면 상태만 유지합니다.
  }
}

function saveParentSecurityToStorage(parentSecurity) {
  try {
    if (typeof localStorage !== "undefined") {
      localStorage.setItem("hakwonParentSecurity", JSON.stringify(parentSecurity));
    }
  } catch {
    // 저장 공간이 막힌 환경에서는 화면 상태만 유지합니다.
  }
}

function loadSavedHomework() {
  try {
    if (typeof localStorage === "undefined") return [];
    const saved = localStorage.getItem("hakwonHomework");
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
}

function loadSavedNotices() {
  try {
    if (typeof localStorage === "undefined") return [];
    const saved = localStorage.getItem("hakwonNotices");
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
}

function saveNoticesToStorage(notices) {
  try {
    if (typeof localStorage !== "undefined") {
      localStorage.setItem("hakwonNotices", JSON.stringify(notices));
    }
  } catch {
    // 저장 공간이 막힌 환경에서는 화면 상태만 유지합니다.
  }
}

function saveHomeworkToStorage(homework) {
  try {
    if (typeof localStorage !== "undefined") {
      localStorage.setItem("hakwonHomework", JSON.stringify(homework));
    }
  } catch {
    // 저장 공간이 막힌 환경에서는 화면 상태만 유지합니다.
  }
}

async function loadCloudFamilyData(familyShareCode) {
  if (!isCloudSyncEnabled()) return null;
  const response = await fetch(getCloudUrl(familyShareCode));
  if (!response.ok) throw new Error("cloud-load-failed");
  return response.json();
}

async function saveCloudFamilyData(data, familyShareCode) {
  if (!isCloudSyncEnabled()) return;
  const response = await fetch(getCloudUrl(familyShareCode), {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...data, updatedAt: new Date().toISOString() }),
  });
  if (!response.ok) throw new Error("cloud-save-failed");
}

function getLocationAccuracyLabel(accuracy) {
  const value = Number(accuracy || 0);
  if (value > 0 && value <= 10) return "매우 정확";
  if (value <= 30) return "양호";
  if (value <= 50) return "대략 확인";
  return "실내라 정확도가 낮을 수 있음";
}

const meaningfulActivityTips = [
  { icon: "📖", title: "10분 독서하기", desc: "좋아하는 책을 한 장이라도 읽어보자." },
  { icon: "✏️", title: "숙제 먼저 확인하기", desc: "오늘 해야 할 숙제가 있는지 가방을 열어보자." },
  { icon: "🎒", title: "가방 정리하기", desc: "내일 필요한 책과 준비물을 미리 챙겨두자." },
  { icon: "🧘", title: "잠깐 쉬면서 숨 고르기", desc: "물 한 잔 마시고 천천히 심호흡해보자." },
  { icon: "🏃", title: "몸을 가볍게 움직이기", desc: "스트레칭이나 제자리 걷기로 몸을 깨워보자." },
  { icon: "💬", title: "엄마 아빠에게 한마디 남기기", desc: "오늘 좋았던 일 하나를 생각해보자." },
];

const parentFamilyReminders = [
  { icon: "💗", title: "오늘은 먼저 안아주기", desc: "일정이 없는 날엔 결과보다 마음을 먼저 물어봐 주세요." },
  { icon: "🌱", title: "작은 용기 칭찬하기", desc: "잘한 일 하나를 찾아 ‘그거 정말 멋졌어’라고 말해 주세요." },
  { icon: "🍚", title: "함께 먹는 시간 만들기", desc: "짧은 간식 시간도 아이에게는 가족의 따뜻한 기억이 됩니다." },
  { icon: "🛋️", title: "쉬어도 괜찮다고 말하기", desc: "바쁜 하루 사이에 쉬는 법을 배우는 것도 중요합니다." },
  { icon: "💬", title: "오늘 기분 묻기", desc: "‘오늘 어땠어?’ 한마디가 아이 마음을 열어줍니다." },
  { icon: "🏠", title: "우리 집 행복 확인하기", desc: "학원보다 중요한 건 아이가 집을 편안한 곳으로 느끼는 것입니다." },
];

const childHopeQuotes = [
  "오늘의 작은 한 걸음이 내일의 멋진 나를 만들어요.",
  "천천히 가도 괜찮아요. 포기하지 않으면 앞으로 가고 있는 거예요.",
  "나는 생각보다 훨씬 잘할 수 있는 아이예요.",
  "실수해도 괜찮아요. 다시 해보는 마음이 진짜 용기예요.",
  "오늘도 나는 조금씩 자라고 있어요.",
  "힘들 땐 잠깐 쉬고, 다시 웃으며 시작하면 돼요.",
];

function getChildHopeQuote(childId, selectedDay) {
  const seed = `${childId}-hope-${selectedDay}`.split("").reduce((sum, char) => sum + char.charCodeAt(0), 0);
  return childHopeQuotes[seed % childHopeQuotes.length];
}

function getMeaningfulActivities(childId, selectedDay) {
  const seed = `${childId}-${selectedDay}`.split("").reduce((sum, char) => sum + char.charCodeAt(0), 0);
  return [0, 1, 2].map((offset) => meaningfulActivityTips[(seed + offset) % meaningfulActivityTips.length]);
}

function getParentFamilyReminders(childId, selectedDay) {
  const seed = `${childId}-parent-${selectedDay}`.split("").reduce((sum, char) => sum + char.charCodeAt(0), 0);
  return [0, 1, 2].map((offset) => parentFamilyReminders[(seed + offset) % parentFamilyReminders.length]);
}

async function safeCopyText(text) {
  if (!text) return false;

  try {
    if (typeof navigator !== "undefined" && navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch {
    // fallback으로 이어집니다.
  }

  try {
    if (typeof document === "undefined") return false;
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.left = "-9999px";
    document.body.appendChild(textarea);
    textarea.select();
    const ok = document.execCommand("copy");
    document.body.removeChild(textarea);
    return ok;
  } catch {
    return false;
  }
}

async function safeShareOrCopy({ title, text, url }) {
  const shareData = { title, text, url };

  try {
    if (typeof navigator !== "undefined" && typeof navigator.share === "function") {
      await navigator.share(shareData);
      return { ok: true, method: "share" };
    }
  } catch {
    // NotAllowedError, AbortError, sandbox 제한 등에서는 링크 복사로 대체합니다.
  }

  const copied = await safeCopyText(url);
  return copied ? { ok: true, method: "copy" } : { ok: false, method: "none" };
}

function runSelfTests() {
  const sample = [
    { id: 101, childId: "a", day: "월", start: "10:00", end: "11:00", status: "대기", alert: "10분 전" },
    { id: 102, childId: "a", day: "월", start: "12:00", end: "13:00", status: "끝남", alert: "30분 전" },
  ];

  console.assert(timeToMinutes("14:30") === 870, "timeToMinutes should parse HH:mm");
  console.assert(alertToMinutes("15분 전") === 15, "alertToMinutes should parse Korean alert text");
  console.assert(getTodayKoreanDay(new Date("2026-05-18T00:00:00")) === "월", "getTodayKoreanDay should return Korean weekday");
  console.assert(getCurrentSchedule(sample, "a", "월", 10 * 60 + 30)?.id === 101, "getCurrentSchedule should return ongoing schedule");
  console.assert(getActiveAlerts(sample, "a", "월", 9 * 60 + 55).length === 1, "getActiveAlerts should find upcoming active alert");
  console.assert(getActiveAlerts(sample, "a", "월", 11 * 60 + 35).length === 0, "getActiveAlerts should ignore ended schedules");
  console.assert(typeof safeShareOrCopy === "function", "safeShareOrCopy should exist as share fallback helper");
  console.assert("01088337590".startsWith("010"), "Dad phone number should be available for tel links");
  console.assert("01027460913".startsWith("010"), "Mom phone number should be available for tel links");
  console.assert(statusStyle["귀가 완료"].includes("emerald"), "Home arrival status should have a visible style");
  console.assert(statusStyle["위치 확인"].includes("cyan"), "Location check status should have a visible style");
  const remainingSample = [
    { id: 201, childId: "a", day: "월", start: "09:00", end: "10:00", status: "끝남" },
    { id: 202, childId: "a", day: "월", start: "15:00", end: "16:00", status: "대기" },
  ];
  console.assert(
    getNextRemainingSchedule(remainingSample, 14 * 60)?.id === 202,
    "getNextRemainingSchedule should return the next future unfinished schedule"
  );
}

if (typeof window !== "undefined" && !window.__HAKWON_SELF_TESTED__) {
  window.__HAKWON_SELF_TESTED__ = true;
  runSelfTests();
}

export default function App() {
  useEffect(() => {
    if (typeof document === "undefined") return;
    if (document.getElementById("hakwon-jua-font")) return;
    const link = document.createElement("link");
    link.id = "hakwon-jua-font";
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=Jua&display=swap";
    document.head.appendChild(link);
  }, []);
  const [role, setRole] = useState("child");
  const [selectedChild, setSelectedChild] = useState("donghun");
  const [schedules, setSchedules] = useState(loadSavedSchedules);
  const [showAdd, setShowAdd] = useState(false);
  const [selectedDay, setSelectedDay] = useState(getTodayKoreanDay());
  const [defaultAlertTime, setDefaultAlertTime] = useState(loadSavedAlertSetting);
  const [notificationEnabled, setNotificationEnabled] = useState(loadSavedNotificationEnabled);
  const emptyScheduleForm = {
    title: "",
    place: "",
    address: "",
    start: "",
    end: "",
    transport: "",
    items: "",
    alert: defaultAlertTime,
  };
  const [newSchedule, setNewSchedule] = useState(emptyScheduleForm);
  const [editingScheduleId, setEditingScheduleId] = useState(null);
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [notificationPermission, setNotificationPermission] = useState(
    typeof Notification === "undefined" ? "unsupported" : Notification.permission
  );
  const [sentAlertIds, setSentAlertIds] = useState([]);
  const [appAlerts, setAppAlerts] = useState([]);
  const [urgentAlert, setUrgentAlert] = useState(null);
  const [statusConfirm, setStatusConfirm] = useState(null);
  const [locationChecks, setLocationChecks] = useState(loadSavedLocationChecks);
  const [parentSecurity, setParentSecurity] = useState(loadSavedParentSecurity);
  const [parentAuthenticated, setParentAuthenticated] = useState(false);
  const [familyInfo, setFamilyInfo] = useState(loadSavedFamilyInfo);
  const [familyShareCode, setFamilyShareCode] = useState(loadSavedFamilyShareCode);
  const [familyCodeInput, setFamilyCodeInput] = useState(loadSavedFamilyShareCode);
  const [homework, setHomework] = useState(loadSavedHomework);
  const [newHomeworkText, setNewHomeworkText] = useState("");
  const [notices, setNotices] = useState(loadSavedNotices);
  const [newNotice, setNewNotice] = useState({ title: "", body: "" });
  const [syncStatus, setSyncStatus] = useState(isCloudSyncEnabled() ? "공유 연결 중" : "기기 저장 모드");
  const [cloudLoaded, setCloudLoaded] = useState(!isCloudSyncEnabled());
  const [nowTick, setNowTick] = useState(Date.now());
  const [copyMessage, setCopyMessage] = useState("");
  const [activeMenu, setActiveMenu] = useState("home");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setNowTick(Date.now()), 30000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    saveSchedulesToStorage(schedules);
  }, [schedules]);

  useEffect(() => {
    saveAlertSettingToStorage(defaultAlertTime);
  }, [defaultAlertTime]);

  useEffect(() => {
    saveNotificationEnabledToStorage(notificationEnabled);
  }, [notificationEnabled]);

  useEffect(() => {
    saveLocationChecksToStorage(locationChecks);
  }, [locationChecks]);

  useEffect(() => {
    saveParentSecurityToStorage(parentSecurity);
  }, [parentSecurity]);

  useEffect(() => {
    saveFamilyInfoToStorage(familyInfo);
  }, [familyInfo]);

  useEffect(() => {
    saveFamilyShareCodeToStorage(familyShareCode);
  }, [familyShareCode]);

  useEffect(() => {
    saveHomeworkToStorage(homework);
  }, [homework]);

  useEffect(() => {
    saveNoticesToStorage(notices);
  }, [notices]);

  useEffect(() => {
    if (!isCloudSyncEnabled()) return;
    let cancelled = false;

    const loadSharedData = async () => {
      try {
        setSyncStatus("가족 일정 불러오는 중");
        const data = await loadCloudFamilyData(familyShareCode);
        if (cancelled) return;
        if (data?.schedules) setSchedules(data.schedules);
        if (data?.locationChecks) setLocationChecks(data.locationChecks);
        if (data?.defaultAlertTime) setDefaultAlertTime(data.defaultAlertTime);
        if (typeof data?.notificationEnabled === "boolean") setNotificationEnabled(data.notificationEnabled);
        if (data?.parentSecurity) setParentSecurity(data.parentSecurity);
        if (data?.familyInfo) setFamilyInfo(data.familyInfo);
        if (data?.homework) setHomework(data.homework);
        if (data?.notices) setNotices(data.notices);
        setSyncStatus("가족 공유 중");
      } catch {
        if (!cancelled) setSyncStatus("공유 연결 실패 · 기기 저장 중");
      } finally {
        if (!cancelled) setCloudLoaded(true);
      }
    };

    loadSharedData();
    const poller = setInterval(loadSharedData, 15000);

    return () => {
      cancelled = true;
      clearInterval(poller);
    };
  }, [familyShareCode]);

  useEffect(() => {
    if (!isCloudSyncEnabled() || !cloudLoaded) return;

    const timer = setTimeout(async () => {
      try {
        await saveCloudFamilyData({ schedules, locationChecks, defaultAlertTime, notificationEnabled, parentSecurity, familyInfo, homework, notices, familyShareCode }, familyShareCode);
        setSyncStatus("가족 공유 중");
      } catch {
        setSyncStatus("공유 저장 실패 · 다시 시도 필요");
      }
    }, 700);

    return () => clearTimeout(timer);
  }, [schedules, locationChecks, defaultAlertTime, notificationEnabled, parentSecurity, familyInfo, homework, notices, familyShareCode, cloudLoaded]);

  const applyFamilyShareCode = () => {
    const normalized = normalizeFamilyCode(familyCodeInput) || DEFAULT_FAMILY_SHARE_CODE;
    setFamilyCodeInput(normalized);
    setFamilyShareCode(normalized);
    setCloudLoaded(false);
    setSyncStatus(isCloudSyncEnabled() ? "가족 공유방 이동 중" : "기기 저장 모드");
  };

  const appChildren = familyInfo.children?.length ? familyInfo.children : defaultFamilyInfo.children;
  const parentContacts = familyInfo.parents?.length ? familyInfo.parents : defaultFamilyInfo.parents;
  const isParentLockActive = parentSecurity.lockEnabled && parentSecurity.password;

  const saveParentPassword = (password) => {
    const trimmed = String(password || "").trim();
    if (trimmed.length < 4) {
      setAppAlerts((prev) => [
        {
          id: `password-short-${Date.now()}`,
          title: "비밀번호가 너무 짧아요",
          body: "부모용 비밀번호는 4자리 이상으로 만들어주세요.",
          time: new Date().toLocaleTimeString("ko-KR", { hour: "2-digit", minute: "2-digit" }),
        },
        ...prev,
      ].slice(0, 5));
      return false;
    }
    setParentSecurity({ password: trimmed, lockEnabled: true });
    setParentAuthenticated(true);
    setAppAlerts((prev) => [
      {
        id: `password-saved-${Date.now()}`,
        title: "부모용 비밀번호가 저장됐어요",
        body: "부모용 잠금 기능이 켜졌습니다.",
        time: new Date().toLocaleTimeString("ko-KR", { hour: "2-digit", minute: "2-digit" }),
      },
      ...prev,
    ].slice(0, 5));
    return true;
  };

  const toggleParentLock = (enabled) => {
    if (enabled && !parentSecurity.password) {
      setAppAlerts((prev) => [
        {
          id: `lock-needs-password-${Date.now()}`,
          title: "비밀번호를 먼저 만들어주세요",
          body: "비밀번호 생성 후 부모용 잠금을 켤 수 있습니다.",
          time: new Date().toLocaleTimeString("ko-KR", { hour: "2-digit", minute: "2-digit" }),
        },
        ...prev,
      ].slice(0, 5));
      return false;
    }
    setParentSecurity((prev) => ({ ...prev, lockEnabled: enabled }));
    setParentAuthenticated(!enabled);
    return true;
  };

  const unlockParentMode = (password) => {
    if (String(password || "").trim() === parentSecurity.password) {
      setParentAuthenticated(true);
      return true;
    }
    return false;
  };

  const addHomework = () => {
    const text = newHomeworkText.trim();
    if (!text) return;
    setHomework((prev) => [
      {
        id: Date.now(),
        childId: selectedChild,
        day: selectedDay,
        text,
        done: false,
        createdAt: new Date().toISOString(),
      },
      ...prev,
    ]);
    setNewHomeworkText("");
  };

  const addNotice = () => {
    const title = newNotice.title.trim();
    const body = newNotice.body.trim();
    if (!title && !body) return;
    setNotices((prev) => [
      {
        id: Date.now(),
        title: title || "가족 공지",
        body,
        author: "부모님",
        createdAt: new Date().toISOString(),
        time: new Date().toLocaleString("ko-KR", {
          month: "numeric",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        }),
      },
      ...prev,
    ]);
    setNewNotice({ title: "", body: "" });
  };

  const deleteNotice = (id) => {
    setNotices((prev) => prev.filter((notice) => notice.id !== id));
  };

  const toggleHomework = (id) => {
    setHomework((prev) => prev.map((item) => (item.id === id ? { ...item, done: !item.done } : item)));
  };

  const deleteHomework = (id) => {
    setHomework((prev) => prev.filter((item) => item.id !== id));
  };

  const child = appChildren.find((c) => c.id === selectedChild) || appChildren[0] || defaultFamilyInfo.children[0];
  const selectedDateKey = useMemo(() => getDateKey(selectedDate), [selectedDate]);

  const todaySchedules = useMemo(
    () =>
      schedules
        .filter((s) => s.childId === selectedChild && isScheduleForSelectedDate(s, selectedDay, selectedDateKey))
        .sort((a, b) => timeToMinutes(a.start) - timeToMinutes(b.start)),
    [schedules, selectedChild, selectedDay, selectedDateKey]
  );

  const visibleSchedules = useMemo(() => {
    const nowMinutes = getNowMinutes(new Date(nowTick));

    return todaySchedules.filter((s) => {
      if (["끝남", "귀가 완료"].includes(s.status)) return false;
      if (isFutureDate(selectedDate)) return true;
      if (!isTodayDate(selectedDate)) return false;
      return timeToMinutes(s.end || s.start) >= nowMinutes;
    });
  }, [todaySchedules, nowTick, selectedDate]);

  const current = useMemo(() => {
    if (isFutureDate(selectedDate)) {
      return visibleSchedules[0] || null;
    }
    return getCurrentSchedule(visibleSchedules, selectedChild, selectedDay);
  }, [visibleSchedules, selectedChild, selectedDay, selectedDate, nowTick]);

  const activeAlerts = useMemo(
    () => getActiveAlerts(visibleSchedules, selectedChild, selectedDay),
    [visibleSchedules, selectedChild, selectedDay, nowTick]
  );
  const todayHomework = useMemo(
    () => homework.filter((item) => item.childId === selectedChild && item.day === selectedDay),
    [homework, selectedChild, selectedDay]
  );
  const todayDateLabel = useMemo(() => getTodayDateLabel(selectedDate), [selectedDate]);
  const weekDates = useMemo(() => {
    const monday = getMondayOfWeek(selectedDate);
    return days.map((day, index) => ({ day, date: addDays(monday, index) }));
  }, [selectedDate]);

  const selectCalendarDate = (date) => {
    setSelectedDate(date);
    setSelectedDay(getTodayKoreanDay(date));
    setShowCalendar(false);
  };

  useEffect(() => {
    if (!notificationEnabled) return;
    activeAlerts.forEach((alert) => {
      const alertId = `${alert.id}-${alert.day}-${alert.start}`;
      if (sentAlertIds.includes(alertId)) return;

      const childName = appChildren.find((c) => c.id === alert.childId)?.name || "아이";
      const title = `${childName}, ${alert.title} 갈 시간이에요`;
      const body = `${alert.start} 시작 · 장소: ${alert.place}`;

      const alertTimeText = new Date().toLocaleTimeString("ko-KR", { hour: "2-digit", minute: "2-digit" });
      const alertData = {
        id: alertId,
        title,
        body,
        time: alertTimeText,
        childName,
        scheduleTitle: alert.title,
        start: alert.start,
        place: alert.place,
        diff: alert.diff,
      };

      setUrgentAlert(alertData);

      setAppAlerts((prev) => [alertData, ...prev].slice(0, 5));

      try {
        if (typeof navigator !== "undefined" && typeof navigator.vibrate === "function") {
          navigator.vibrate([250, 120, 250, 120, 250]);
        }
      } catch {
        // 진동이 지원되지 않아도 앱은 계속 동작합니다.
      }

      try {
        if (notificationPermission === "granted" && typeof Notification !== "undefined") {
          new Notification(title, {
            body,
            tag: alertId,
            requireInteraction: true,
            silent: false,
          });
        }
      } catch {
        // 브라우저가 알림을 제한해도 앱은 계속 동작합니다.
      }

      setSentAlertIds((prev) => [...prev, alertId]);
    });
  }, [activeAlerts, notificationPermission, sentAlertIds, notificationEnabled]);

  const requestNotificationPermission = async () => {
    try {
      if (typeof Notification === "undefined") {
        setNotificationPermission("unsupported");
        return;
      }
      const result = await Notification.requestPermission();
      setNotificationPermission(result);
    } catch {
      setNotificationPermission("denied");
    }
  };

  const testNotification = () => {
    if (!notificationEnabled) {
      setAppAlerts((prev) => [
        {
          id: `test-off-${Date.now()}`,
          title: "앱 알림이 꺼져 있어요",
          body: "알림 현재상태에서 앱 알림을 ON으로 바꾸면 테스트할 수 있습니다.",
          time: new Date().toLocaleTimeString("ko-KR", { hour: "2-digit", minute: "2-digit" }),
        },
        ...prev,
      ].slice(0, 5));
      return;
    }

    const childName = child?.name || "아이";
    const title = `${childName}, 다음 일정 확인해요`;
    const body = current ? `${current.title} · ${current.start} · ${current.place}` : "오늘은 등록된 일정이 없습니다.";

    setAppAlerts((prev) =>
      [
        {
          id: `test-${Date.now()}`,
          title,
          body,
          time: new Date().toLocaleTimeString("ko-KR", { hour: "2-digit", minute: "2-digit" }),
        },
        ...prev,
      ].slice(0, 5)
    );

    try {
      if (notificationPermission === "granted" && typeof Notification !== "undefined") {
        new Notification(title, { body });
      }
    } catch {
      setAppAlerts((prev) =>
        [
          {
            id: `notification-blocked-${Date.now()}`,
            title: "브라우저 알림이 제한됐어요",
            body: "앱 안 최근 알림에는 정상적으로 기록됩니다.",
            time: new Date().toLocaleTimeString("ko-KR", { hour: "2-digit", minute: "2-digit" }),
          },
          ...prev,
        ].slice(0, 5)
      );
    }
  };

  const clearAppAlerts = () => setAppAlerts([]);

  const resetSchedules = () => {
    if (typeof window !== "undefined" && !window.confirm("일정을 처음 상태로 되돌릴까요? 직접 추가한 일정은 사라집니다.")) return;
    setSchedules(defaultSchedules);
    setAppAlerts([]);
    setSentAlertIds([]);
  };

  const updateStatus = (id, status) => {
    const targetSchedule = schedules.find((s) => s.id === id);
    setSchedules((prev) => prev.map((s) => (s.id === id ? { ...s, status } : s)));

    const statusMessage = {
      "도착 완료": "도착 확인이 부모님 화면에 표시됩니다.",
      끝남: "수업이 끝난 것으로 확인됐어요.",
      "귀가 완료": "집에 온 것으로 확인됐어요.",
      "위치 확인": "위치 확인 상태로 저장됐어요.",
      "이동 중": "이동 중으로 저장됐어요.",
      대기: "대기 상태로 바뀌었어요.",
    }[status] || "상태가 저장됐어요.";

    setStatusConfirm({
      id: Date.now(),
      title: status,
      body: targetSchedule ? `${targetSchedule.title} · ${statusMessage}` : statusMessage,
    });

    setTimeout(() => setStatusConfirm(null), 2200);
  };

  const saveLocationCheck = (scheduleId, locationData) => {
    setLocationChecks((prev) => ({ ...prev, [scheduleId]: locationData }));
    updateStatus(scheduleId, "위치 확인");
    setAppAlerts((prev) => [
      {
        id: `location-${scheduleId}-${Date.now()}`,
        title: "위치가 확인됐어요",
        body: `${locationData.place || "장소 확인"} · ${locationData.time} · 위치 상태: ${getLocationAccuracyLabel(locationData.accuracy)}`,
        time: locationData.time,
      },
      ...prev,
    ].slice(0, 5));
  }; 

  const requestDeleteSchedule = (schedule) => setDeleteTarget(schedule);
  const cancelDeleteSchedule = () => setDeleteTarget(null);

  const confirmDeleteSchedule = () => {
    if (!deleteTarget) return;
    setSchedules((prev) => prev.filter((s) => s.id !== deleteTarget.id));
    setDeleteTarget(null);
  };

  const addSchedule = () => {
    if (!newSchedule.title.trim() || !newSchedule.start.trim()) return;

    const scheduleData = {
      childId: selectedChild,
      day: selectedDay,
      dateKey: selectedDateKey,
      dateLabel: getTodayDateLabel(selectedDate),
      title: newSchedule.title.trim(),
      place: newSchedule.place.trim() || "장소를 입력해주세요",
      address: newSchedule.address.trim() || "상세 위치를 입력해주세요",
      start: newSchedule.start,
      end: newSchedule.end || newSchedule.start,
      transport: newSchedule.transport.trim() || "이동방법 입력 필요",
      items: newSchedule.items.trim() || "준비물 확인 필요",
      alert: newSchedule.alert,
    };

    if (editingScheduleId) {
      setSchedules((prev) => prev.map((s) => (s.id === editingScheduleId ? { ...s, ...scheduleData } : s)));
    } else {
      setSchedules((prev) => [...prev, { id: Date.now(), status: "대기", ...scheduleData }]);
    }

    setNewSchedule(emptyScheduleForm);
    setEditingScheduleId(null);
    setShowAdd(false);
  };

  const startEditSchedule = (schedule) => {
    setEditingScheduleId(schedule.id);
    setNewSchedule({
      title: schedule.title || "",
      place: schedule.place || "",
      address: schedule.address || "",
      start: schedule.start || "",
      end: schedule.end || "",
      transport: schedule.transport || "",
      items: schedule.items || "",
      alert: schedule.alert || "10분 전",
    });
    setShowAdd(true);
  };

  const cancelScheduleForm = () => {
    setNewSchedule(emptyScheduleForm);
    setEditingScheduleId(null);
    setShowAdd(false);
  };

  const updateNewSchedule = (field, value) => {
    setNewSchedule((prev) => ({ ...prev, [field]: value }));
  };

  const changeDefaultAlertTime = (value) => {
    setDefaultAlertTime(value);
    setNewSchedule((prev) => ({ ...prev, alert: value }));
    setSchedules((prev) => prev.map((s) => ({ ...s, alert: value })));
    setAppAlerts((prev) => [
      {
        id: `alert-setting-${Date.now()}`,
        title: "알림 시간이 변경됐어요",
        body: `모든 일정 알림이 ${value}으로 설정되었습니다.`,
        time: new Date().toLocaleTimeString("ko-KR", { hour: "2-digit", minute: "2-digit" }),
      },
      ...prev,
    ].slice(0, 5));
  };

  const copyAppLink = async () => {
    const currentUrl = typeof window !== "undefined" ? window.location.href : "";
    const copied = await safeCopyText(currentUrl);
    setCopyMessage(copied ? "앱 링크를 복사했어요" : "주소창의 링크를 직접 복사해주세요");
    setTimeout(() => setCopyMessage(""), 2200);
  };

  const shareApp = async () => {
    const currentUrl = typeof window !== "undefined" ? window.location.href : "";
    const result = await safeShareOrCopy({
      title: "학원 안가니?",
      text: "동훈이와 동준이 학원 이동 알림앱",
      url: currentUrl,
    });

    if (result.method === "share") {
      setCopyMessage("공유창을 열었어요");
    } else if (result.method === "copy") {
      setCopyMessage("공유가 제한되어 링크를 복사했어요");
    } else {
      setCopyMessage("공유가 제한됐어요. 주소창의 링크를 직접 복사해주세요");
    }
    setTimeout(() => setCopyMessage(""), 2600);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-rose-50 via-orange-50 to-amber-50 text-slate-900">
      <div className="pointer-events-none absolute -top-12 -left-10 h-44 w-44 rounded-full bg-rose-200/30 blur-3xl" />
      <div className="pointer-events-none absolute top-36 -right-16 h-52 w-52 rounded-full bg-amber-200/35 blur-3xl" />
      <div className="pointer-events-none absolute bottom-24 left-8 h-36 w-36 rounded-full bg-pink-200/25 blur-3xl" />
      <div className="pointer-events-none absolute right-7 top-28 text-5xl opacity-[0.06]">💗</div>
      <div className="pointer-events-none absolute left-6 top-[430px] text-4xl opacity-[0.05]">🏠</div>
      <div className="pointer-events-none absolute bottom-10 right-10 text-5xl opacity-[0.05]">🎒</div>
      {urgentAlert && <UrgentAlertOverlay alert={urgentAlert} onClose={() => setUrgentAlert(null)} />}
      {statusConfirm && <StatusConfirmToast confirm={statusConfirm} onClose={() => setStatusConfirm(null)} />}

      <div className="relative z-10 mx-auto max-w-md px-3 py-3">
        <header className="mb-3 rounded-[2rem] border border-white/70 bg-white/75 p-4 shadow-[0_12px_35px_rgba(244,114,182,0.12)] backdrop-blur">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0 flex-1">
              <div className="mb-2 inline-flex items-center gap-1.5 rounded-full border border-rose-100 bg-rose-50/80 px-3 py-1 text-[11px] font-black text-rose-500 shadow-sm" style={{ fontFamily: appFontFamily }}>
                <CalendarDays size={13} /> 초등학생 동선 알림앱 <span className="text-rose-400">♥</span>
              </div>

              <div className="relative inline-block">
                <div className="absolute -left-1 -top-1 h-3 w-3 rounded-full bg-rose-300/45 blur-[1px]" />
                <div className="absolute -right-2 bottom-1 h-2.5 w-2.5 rounded-full bg-amber-300/55 blur-[1px]" />
                <h1
                  className="relative text-[44px] font-black leading-none text-slate-950"
                  style={{
                    fontFamily: appFontFamily,
                    letterSpacing: "-0.045em",
                    textShadow: "2px 3px 0 rgba(244, 114, 182, 0.20), 0 2px 12px rgba(15,23,42,0.08)",
                  }}
                >
                  학원안가니?
                </h1>
                <div className="mt-2 h-1.5 w-24 rounded-full bg-gradient-to-r from-rose-400 via-pink-300 to-orange-200 shadow-sm" />
              </div>
            </div>

          <div className="mt-0 flex shrink-0 flex-col items-end gap-1.5">
            <p className="rounded-full bg-rose-50 px-2.5 py-1 text-[10px] font-black text-rose-400 shadow-sm">
              {syncStatus}
            </p>
            <div className="mt-1 grid grid-cols-2 rounded-2xl border border-rose-100 bg-white p-0.5 shadow-sm">
            <button
              onClick={() => {
                setRole("child");
                setParentAuthenticated(false);
              }}
              className={`rounded-xl px-2 py-1 text-[10px] font-black transition ${
                role === "child" ? "bg-rose-400 text-white shadow" : "text-slate-500"
              }`}
            >
              아이용
            </button>
            <button
              onClick={() => {
                setRole("parent");
                if (isParentLockActive) setParentAuthenticated(false);
              }}
              className={`rounded-xl px-2 py-1 text-[10px] font-black transition ${
                role === "parent" ? "bg-rose-400 text-white shadow" : "text-slate-500"
              }`}
            >
              부모용
            </button>
            </div>
          </div>
        </div>
        </header>

        <div className="mb-2 grid grid-cols-2 gap-2">
          {appChildren.map((c) => {
            const isSelected = selectedChild === c.id;

            return (
              <button
                key={c.id}
                type="button"
                onClick={() => setSelectedChild(c.id)}
                className={`relative overflow-hidden rounded-[24px] px-4 py-3 text-left transition-all duration-200 ${
                  isSelected
                    ? "border-2 border-rose-400 bg-gradient-to-r from-rose-50 via-pink-50 to-white shadow-[0_10px_28px_rgba(244,114,182,0.24)]"
                    : "border border-rose-100 bg-white/90 shadow-sm hover:border-rose-200 hover:bg-rose-50/40"
                }`}
              >
                {isSelected && (
                  <span className="absolute bottom-0 left-0 h-1.5 w-full bg-gradient-to-r from-rose-400 via-pink-300 to-orange-200" />
                )}

                <div className="flex items-center gap-3">
                  <ChildAvatar child={c} />
                  <div className="flex flex-col" style={{ fontFamily: appFontFamily }}>
                    <div className="flex items-baseline gap-2">
                      <span className={`text-lg font-black ${isSelected ? "text-slate-950" : "text-slate-800"}`}>{c.name}</span>
                      <span className={`text-xs font-bold ${isSelected ? "text-rose-500" : "text-slate-400"}`}>{c.grade}</span>
                    </div>
                    <span className={`mt-1 text-xs font-bold ${isSelected ? "text-rose-500" : "text-slate-300"}`}>
                      {isSelected ? "현재 선택됨" : "눌러서 일정 보기"}
                    </span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        <TodayDateBadge todayDateLabel={todayDateLabel} onClick={() => setShowCalendar((prev) => !prev)} />

        {showCalendar && (
          <CalendarPicker
            selectedDate={selectedDate}
            onSelectDate={selectCalendarDate}
            onClose={() => setShowCalendar(false)}
          />
        )}

        <div className="mb-2 grid grid-cols-7 gap-1">
          {days.map((day) => (
            <button
              key={day}
              onClick={() => {
                const target = weekDates.find((item) => item.day === day)?.date;
                if (target) setSelectedDate(target);
                setSelectedDay(day);
              }}
              className={`rounded-2xl py-2 text-[12px] font-black transition ${
                selectedDay === day ? "bg-rose-400 text-white shadow" : "border border-rose-100 bg-white/80 text-slate-500"
              }`}
            >
              {day}
            </button>
          ))}
        </div>

        <MainMenu activeMenu={activeMenu} setActiveMenu={setActiveMenu} />

        {activeMenu === "home" &&
          (role === "child" ? (
            <ChildView
              child={child}
              current={current}
              selectedDay={selectedDay}
              updateStatus={updateStatus}
              schedules={visibleSchedules}
              hadSchedulesToday={todaySchedules.length > 0}
              locationChecks={locationChecks}
              saveLocationCheck={saveLocationCheck}
              parentContacts={parentContacts}
              showAdd={showAdd}
              setShowAdd={setShowAdd}
              newSchedule={newSchedule}
              updateNewSchedule={updateNewSchedule}
              addSchedule={addSchedule}
              cancelScheduleForm={cancelScheduleForm}
              selectedDateLabel={todayDateLabel}
              selectedDate={selectedDate}
            />
          ) : isParentLockActive && !parentAuthenticated ? (
            <ParentLockScreen onUnlock={unlockParentMode} onBackToChild={() => setRole("child")} />
          ) : (
            <ParentView
              child={child}
              selectedDay={selectedDay}
              schedules={visibleSchedules}
              hadSchedulesToday={todaySchedules.length > 0}
              updateStatus={updateStatus}
              showAdd={showAdd}
              setShowAdd={setShowAdd}
              newSchedule={newSchedule}
              updateNewSchedule={updateNewSchedule}
              addSchedule={addSchedule}
              startEditSchedule={startEditSchedule}
              editingScheduleId={editingScheduleId}
              cancelScheduleForm={cancelScheduleForm}
              requestDeleteSchedule={requestDeleteSchedule}
              deleteTarget={deleteTarget}
              cancelDeleteSchedule={cancelDeleteSchedule}
              confirmDeleteSchedule={confirmDeleteSchedule}
              locationChecks={locationChecks}
              selectedDate={selectedDate}
            />
          ))}

        {activeMenu === "homework" && (
          <HomeworkPanel
            child={child}
            selectedDay={selectedDay}
            homework={todayHomework}
            newHomeworkText={newHomeworkText}
            setNewHomeworkText={setNewHomeworkText}
            addHomework={addHomework}
            toggleHomework={toggleHomework}
            deleteHomework={deleteHomework}
            role={role}
          />
        )}

        {activeMenu === "notice" && (
          <NotificationPanel
            activeAlerts={activeAlerts}
            appAlerts={appAlerts}
            permission={notificationPermission}
            onRequestPermission={requestNotificationPermission}
            onTest={testNotification}
            onClear={clearAppAlerts}
            onReset={resetSchedules}
            notificationEnabled={notificationEnabled}
            setNotificationEnabled={setNotificationEnabled}
            notices={notices}
            newNotice={newNotice}
            setNewNotice={setNewNotice}
            addNotice={addNotice}
            deleteNotice={deleteNotice}
            role={role}
          />
        )}

        {activeMenu === "settings" && (
          <WebAppGuidePanel
            onCopy={copyAppLink}
            onShare={shareApp}
            copyMessage={copyMessage}
            defaultAlertTime={defaultAlertTime}
            onDefaultAlertTimeChange={changeDefaultAlertTime}
            parentSecurity={parentSecurity}
            onSaveParentPassword={saveParentPassword}
            onToggleParentLock={toggleParentLock}
            familyInfo={familyInfo}
            setFamilyInfo={setFamilyInfo}
            familyShareCode={familyShareCode}
            familyCodeInput={familyCodeInput}
            setFamilyCodeInput={setFamilyCodeInput}
            onApplyFamilyShareCode={applyFamilyShareCode}
            role={role}
          />
        )}
      </div>
    </div>
  );
}

function StatusConfirmToast({ confirm, onClose }) {
  return (
    <div className="fixed left-0 right-0 top-5 z-[60] flex justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: -18, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        className="w-full max-w-sm rounded-3xl border-2 border-emerald-300 bg-white p-4 text-slate-900 shadow-xl"
      >
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 shadow-sm">
            <CheckCircle2 size={22} />
          </div>
          <div className="min-w-0 flex-1">
            <p className="font-black">{confirm.title}</p>
            <p className="mt-1 break-keep text-sm font-bold leading-5 text-slate-700">{confirm.body}</p>
          </div>
          <button type="button" onClick={onClose} className="rounded-full bg-slate-100 p-1 text-slate-500">
            <X size={16} />
          </button>
        </div>
      </motion.div>
    </div>
  );
}

function UrgentAlertOverlay({ alert, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/45 px-4 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="w-full max-w-sm rounded-[2rem] border border-rose-100 bg-white p-5 text-center shadow-2xl"
      >
        <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-rose-100 text-3xl">
          🔔
        </div>
        <p className="text-xs font-black text-rose-400">일정 알림</p>
        <h2 className="mt-2 break-keep text-2xl font-black leading-8 text-slate-900">
          {alert.diff === 0 ? "지금 이동할 시간이에요" : `${alert.diff}분 뒤 이동해요`}
        </h2>
        <div className="mt-4 rounded-3xl bg-rose-50 p-4 text-left">
          <p className="text-xs font-bold text-rose-400">{alert.childName}</p>
          <p className="mt-1 text-xl font-black text-rose-600">{alert.scheduleTitle}</p>
          <p className="mt-2 text-sm font-bold text-slate-700">시간: {alert.start}</p>
          <p className="mt-1 text-sm font-bold text-slate-700">장소: {alert.place}</p>
        </div>
        <p className="mt-3 break-keep text-xs leading-5 text-slate-500">
          휴대폰 알림 권한이 허용되어 있으면 화면 밖에서도 알림이 표시될 수 있습니다.
        </p>
        <Button className="mt-4 h-12 w-full rounded-3xl text-base font-black" onClick={onClose}>
          확인했어요
        </Button>
      </motion.div>
    </div>
  );
}

function ChildAvatar({ child }) {
  const isDonghun = child.avatarTheme === "rose";
  const bg1 = isDonghun ? "#FFE4E6" : "#DBEAFE";
  const bg2 = isDonghun ? "#FED7AA" : "#CCFBF1";
  const shirt = isDonghun ? "#FB7185" : "#38BDF8";
  const shirtDark = isDonghun ? "#E11D48" : "#0284C7";
  const hair = isDonghun ? "#6B3F24" : "#7C4A1D";
  const cheek = isDonghun ? "#FDA4AF" : "#FDBA74";

  return (
    <div className="h-12 w-12 overflow-hidden rounded-full bg-white shadow-sm ring-2 ring-white">
      <svg viewBox="0 0 96 96" className="h-full w-full" role="img" aria-label={`${child.name} 아바타`}>
        <defs>
          <linearGradient id={`avatar-bg-${child.id}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={bg1} />
            <stop offset="100%" stopColor={bg2} />
          </linearGradient>
          <linearGradient id={`avatar-shirt-${child.id}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={shirt} />
            <stop offset="100%" stopColor={shirtDark} />
          </linearGradient>
          <filter id={`avatar-soft-${child.id}`} x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#000000" floodOpacity="0.12" />
          </filter>
        </defs>

        <rect width="96" height="96" rx="48" fill={`url(#avatar-bg-${child.id})`} />
        <circle cx="25" cy="22" r="12" fill="rgba(255,255,255,0.45)" />
        <circle cx="74" cy="24" r="9" fill="rgba(255,255,255,0.32)" />

        <g filter={`url(#avatar-soft-${child.id})`}>
          <path d="M23 89c3-18 14-28 25-28s22 10 25 28H23z" fill={`url(#avatar-shirt-${child.id})`} />
          <path d="M34 66c4 7 24 7 28 0v13c-6 5-22 5-28 0V66z" fill="#F2B47D" />
          <ellipse cx="48" cy="43" rx="23" ry="25" fill="#F6C28B" />

          {isDonghun ? (
            <>
              <path d="M25 39c0-16 10-26 24-26 13 0 23 8 24 23-9-6-20-7-31-3-7 3-12 6-17 6z" fill={hair} />
              <path d="M31 28c7-11 24-12 35-3-3-9-13-15-26-13-10 2-17 8-19 18 3-1 6-2 10-2z" fill="#8B5A2B" opacity="0.85" />
            </>
          ) : (
            <>
              <path d="M24 38c2-17 13-27 27-25 13 1 22 11 21 26-8-7-17-9-28-6-9 2-14 6-20 5z" fill={hair} />
              <path d="M30 30c6-10 20-14 34-4-5-10-20-14-31-7-6 4-9 8-10 16 2-2 4-4 7-5z" fill="#A16207" opacity="0.7" />
            </>
          )}

          <circle cx="37" cy="46" r="2.3" fill="#1F2937" />
          <circle cx="59" cy="46" r="2.3" fill="#1F2937" />
          <circle cx="31" cy="53" r="4" fill={cheek} opacity="0.65" />
          <circle cx="65" cy="53" r="4" fill={cheek} opacity="0.65" />
          <path d="M41 56c4 4 10 4 14 0" fill="none" stroke="#9F1239" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M42 42c-3-2-7-2-10 0" stroke={hair} strokeWidth="2" strokeLinecap="round" opacity="0.35" />
          <path d="M54 42c3-2 7-2 10 0" stroke={hair} strokeWidth="2" strokeLinecap="round" opacity="0.35" />
        </g>
      </svg>
    </div>
  );
}

function TodayDateBadge({ todayDateLabel, onClick }) {
  return (
    <div className="mb-2 flex justify-center">
      <button
        type="button"
        onClick={onClick}
        className="inline-flex items-center gap-1 rounded-2xl border border-rose-100 bg-white/80 px-4 py-2 text-[12px] font-black text-rose-400 shadow-sm transition hover:bg-rose-50"
      >
        <CalendarDays size={15} />
        {todayDateLabel}
      </button>
    </div>
  );
}

function CalendarPicker({ selectedDate, onSelectDate, onClose }) {
  const [viewDate, setViewDate] = useState(() => new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1));
  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();
  const firstDay = new Date(year, month, 1);
  const startOffset = firstDay.getDay();
  const lastDate = new Date(year, month + 1, 0).getDate();
  const cells = [];

  for (let i = 0; i < startOffset; i += 1) cells.push(null);
  for (let date = 1; date <= lastDate; date += 1) cells.push(new Date(year, month, date));
  while (cells.length % 7 !== 0) cells.push(null);

  const moveMonth = (amount) => {
    setViewDate((prev) => new Date(prev.getFullYear(), prev.getMonth() + amount, 1));
  };

  const isSameDate = (a, b) =>
    a && b && a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();

  const today = new Date();

  return (
    <div className="mb-2 rounded-[2rem] border border-rose-100 bg-white/95 p-3 shadow-lg shadow-rose-100/70 backdrop-blur">
      <div className="mb-3 flex items-center justify-between">
        <button
          type="button"
          onClick={() => moveMonth(-1)}
          className="rounded-full bg-rose-50 px-3 py-2 text-sm font-black text-rose-500"
        >
          이전
        </button>
        <div className="text-center">
          <p className="text-xs font-bold text-rose-400">달력 선택</p>
          <p className="text-lg font-black text-slate-900">{year}년 {month + 1}월</p>
        </div>
        <button
          type="button"
          onClick={() => moveMonth(1)}
          className="rounded-full bg-rose-50 px-3 py-2 text-sm font-black text-rose-500"
        >
          다음
        </button>
      </div>

      <div className="mb-1 grid grid-cols-7 gap-1 text-center text-[11px] font-black text-slate-400">
        {["일", "월", "화", "수", "목", "금", "토"].map((day) => (
          <div key={day} className={day === "일" ? "text-red-300" : day === "토" ? "text-blue-300" : ""}>
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {cells.map((date, index) => {
          if (!date) return <div key={`empty-${index}`} className="h-10" />;
          const selected = isSameDate(date, selectedDate);
          const todayMatch = isSameDate(date, today);
          return (
            <button
              key={date.toISOString()}
              type="button"
              onClick={() => onSelectDate(date)}
              className={`h-10 rounded-2xl text-sm font-black transition ${
                selected
                  ? "bg-rose-400 text-white shadow"
                  : todayMatch
                    ? "border border-rose-200 bg-rose-50 text-rose-500"
                    : "bg-orange-50/60 text-slate-600 hover:bg-rose-50"
              }`}
            >
              {date.getDate()}
            </button>
          );
        })}
      </div>

      <div className="mt-3 grid grid-cols-2 gap-2">
        <Button variant="outline" className="rounded-2xl" onClick={onClose}>
          닫기
        </Button>
        <Button className="rounded-2xl" onClick={() => onSelectDate(new Date())}>
          오늘로 이동
        </Button>
      </div>
    </div>
  );
}

function ParentLockScreen({ onUnlock, onBackToChild }) {
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const submit = () => {
    const ok = onUnlock(password);
    if (!ok) {
      setMessage("비밀번호가 맞지 않아요. 다시 입력해주세요.");
      setPassword("");
      return;
    }
    setMessage("");
  };

  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
      <Card className="rounded-[2rem] border border-rose-100 bg-white/90 shadow-lg shadow-rose-100/70">
        <CardContent className="p-5 text-center">
          <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-rose-100 text-rose-500">
            <Lock size={30} />
          </div>
          <p className="text-xs font-bold text-rose-400">부모용 잠금</p>
          <h2 className="mt-2 text-2xl font-black text-slate-900">비밀번호를 입력해주세요</h2>
          <p className="mt-2 break-keep text-sm leading-6 text-slate-500">
            부모용 화면은 일정 추가·수정이 가능해서 비밀번호로 보호하고 있어요.
          </p>

          <input
            type="password"
            inputMode="numeric"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") submit();
            }}
            placeholder="비밀번호"
            className="mt-4 w-full rounded-3xl border border-rose-100 bg-rose-50 px-4 py-4 text-center text-lg font-black tracking-widest outline-none focus:border-rose-300"
          />

          {message && <p className="mt-3 rounded-2xl bg-red-50 p-3 text-sm font-bold text-red-500">{message}</p>}

          <div className="mt-4 grid grid-cols-2 gap-2">
            <Button variant="outline" className="h-12 rounded-3xl" onClick={onBackToChild}>
              아이용으로 돌아가기
            </Button>
            <Button className="h-12 rounded-3xl" onClick={submit}>
              확인
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

function MainMenu({ activeMenu, setActiveMenu }) {
  const menus = [
    { id: "home", label: "홈", icon: <Home size={16} /> },
    { id: "homework", label: "숙제하기", icon: <ListChecks size={16} /> },
    { id: "notice", label: "공지사항", icon: <Bell size={16} /> },
    { id: "settings", label: "설정", icon: <Smartphone size={16} /> },
  ];

  return (
    <div className="mb-2 grid grid-cols-4 rounded-3xl border border-rose-100 bg-white/80 p-1 shadow-sm">
      {menus.map((menu) => (
        <button
          key={menu.id}
          onClick={() => setActiveMenu(menu.id)}
          className={`flex items-center justify-center gap-1 rounded-2xl py-3 text-[12px] font-black transition ${
            activeMenu === menu.id ? "bg-rose-400 text-white shadow" : "text-slate-500"
          }`}
        >
          {menu.icon}
          {menu.label}
        </button>
      ))}
    </div>
  );
}

function HomeworkPanel({
  child,
  selectedDay,
  homework,
  newHomeworkText,
  setNewHomeworkText,
  addHomework,
  toggleHomework,
  deleteHomework,
  role,
}) {
  const doneCount = homework.filter((item) => item.done).length;
  const totalCount = homework.length;

  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="space-y-3">
      <Card className="rounded-[2rem] border border-rose-100 bg-white/90 shadow-lg shadow-rose-100/70">
        <CardContent className="p-4">
          <div className="mb-3 flex items-center justify-between gap-3">
            <div>
              <p className="text-xs font-bold text-rose-400">
                {child.name} · {selectedDay}요일
              </p>
              <h2 className="mt-1 text-2xl font-black text-slate-900">숙제하기</h2>
              <p className="mt-1 break-keep text-xs leading-5 text-slate-500">
                생각난 숙제를 바로 적고, 끝나면 체크해요.
              </p>
            </div>
            <div className="rounded-full bg-rose-50 px-3 py-2 text-center text-xs font-black text-rose-500">
              {doneCount}/{totalCount}
              <br />완료
            </div>
          </div>

          <div className="flex gap-2">
            <input
              value={newHomeworkText}
              onChange={(e) => setNewHomeworkText(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") addHomework();
              }}
              placeholder="예: 수학 35쪽 풀기"
              className="min-w-0 flex-1 rounded-2xl border border-rose-100 bg-rose-50 px-4 py-3 text-sm font-bold outline-none focus:border-rose-300"
            />
            <Button className="shrink-0 rounded-2xl" onClick={addHomework} disabled={!newHomeworkText.trim()}>
              추가
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="rounded-[2rem] border border-orange-100 bg-white/90 shadow-md shadow-orange-100/60">
        <CardContent className="p-4">
          {homework.length === 0 ? (
            <div className="rounded-3xl bg-orange-50/70 p-5 text-center">
              <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-white text-2xl shadow-sm">
                ✏️
              </div>
              <p className="text-lg font-black text-slate-900">아직 적어둔 숙제가 없어요</p>
              <p className="mt-2 break-keep text-sm leading-6 text-slate-500">
                떠오르는 숙제를 하나 적어두면 잊지 않고 해낼 수 있어요.
              </p>
            </div>
          ) : (
            <div className="space-y-2">
              {homework.map((item) => (
                <div
                  key={item.id}
                  className={`flex items-center gap-3 rounded-3xl p-3 shadow-sm ${item.done ? "bg-emerald-50" : "bg-orange-50/70"}`}
                >
                  <button
                    type="button"
                    onClick={() => toggleHomework(item.id)}
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-black ${
                      item.done ? "bg-emerald-500 text-white" : "bg-white text-orange-400"
                    }`}
                  >
                    {item.done ? <CheckCircle2 size={22} /> : "○"}
                  </button>
                  <div className="min-w-0 flex-1">
                    <p className={`break-keep font-black ${item.done ? "text-emerald-700 line-through" : "text-slate-900"}`}>
                      {item.text}
                    </p>
                    <p className="mt-0.5 text-xs font-bold text-slate-400">{item.done ? "완료했어요" : "아직 해야 해요"}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => deleteHomework(item.id)}
                    className="rounded-full bg-white p-2 text-slate-300 hover:text-red-400"
                    title="숙제 삭제"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              ))}
            </div>
          )}

          <div className="mt-3 rounded-3xl bg-rose-50 p-3 text-center text-xs font-bold leading-5 text-rose-500">
            {role === "child"
              ? "하나씩 해내다 보면 오늘 숙제도 스스로 끝낼 수 있어요."
              : "아이가 스스로 적고 체크한 숙제를 함께 응원해주세요."}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

function WebAppGuidePanel({
  onCopy,
  onShare,
  copyMessage,
  defaultAlertTime,
  onDefaultAlertTimeChange,
  parentSecurity,
  onSaveParentPassword,
  onToggleParentLock,
  familyInfo,
  setFamilyInfo,
  familyShareCode,
  familyCodeInput,
  setFamilyCodeInput,
  onApplyFamilyShareCode,
  role,
}) {
  const canEditSettings = role === "parent";
  const [selectedSetting, setSelectedSetting] = useState(null);
  const [passwordInput, setPasswordInput] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");

  const updateParentInfo = (index, field, value) => {
    setFamilyInfo((prev) => ({
      ...prev,
      parents: prev.parents.map((parent, i) => (i === index ? { ...parent, [field]: value } : parent)),
    }));
  };

  const updateChildInfo = (index, field, value) => {
    setFamilyInfo((prev) => ({
      ...prev,
      children: prev.children.map((child, i) => (i === index ? { ...child, [field]: value } : child)),
    }));
  };

  const addChildInfo = () => {
    setFamilyInfo((prev) => ({
      ...prev,
      children: [
        ...prev.children,
        {
          id: `child-${Date.now()}`,
          name: "아이",
          grade: "초등",
          phone: "",
          avatarTheme: prev.children.length % 2 === 0 ? "rose" : "sky",
        },
      ],
    }));
  };

  const deleteChildInfo = (index) => {
    setFamilyInfo((prev) => {
      if ((prev.children || []).length <= 1) return prev;
      return {
        ...prev,
        children: prev.children.filter((_, i) => i !== index),
      };
    });
  };

  const handleSavePassword = () => {
    const ok = onSaveParentPassword(passwordInput);
    setPasswordMessage(ok ? "부모용 비밀번호가 저장되고 잠금이 켜졌어요." : "비밀번호는 4자리 이상으로 만들어주세요.");
    if (ok) setPasswordInput("");
    setTimeout(() => setPasswordMessage(""), 2500);
  };

  const handleToggleLock = (enabled) => {
    const ok = onToggleParentLock(enabled);
    setPasswordMessage(ok ? (enabled ? "부모용 잠금이 켜졌어요." : "부모용 잠금이 해제됐어요.") : "비밀번호를 먼저 만들어주세요.");
    setTimeout(() => setPasswordMessage(""), 2500);
  };

  const settingItems = [
    {
      id: "profile",
      title: "내정보관리",
      desc: "보호자와 아이 정보를 입력합니다.",
      icon: <UserCog size={20} />,
      detail: "가족 정보를 입력하면 다른 가족도 이 앱을 바로 사용할 수 있습니다.",
    },
    {
      id: "familyCode",
      title: "가족코드 설정",
      desc: "가족별 공유방을 만들거나 이동합니다.",
      icon: <KeyRound size={20} />,
      detail: "같은 가족코드를 입력한 휴대폰끼리만 일정과 공지사항이 공유됩니다.",
    },
    {
      id: "alarm",
      title: "알림설정",
      desc: "일정 알림과 테스트 알림을 관리합니다.",
      icon: <SlidersHorizontal size={20} />,
      detail: "알림 시간을 선택하면 모든 일정에 바로 반영됩니다.",
    },
    {
      id: "parentLock",
      title: "부모용 잠금",
      desc: parentSecurity?.lockEnabled ? "부모용 화면이 비밀번호로 보호 중입니다." : "부모용 화면 잠금을 설정할 수 있습니다.",
      icon: parentSecurity?.lockEnabled ? <Lock size={20} /> : <Unlock size={20} />,
      detail: "비밀번호를 만들면 부모용 화면에 들어갈 때 비밀번호 확인이 필요합니다.",
    },
    {
      id: "logout",
      title: "로그아웃",
      desc: "현재 시제품은 로그인 없이 사용 중입니다.",
      icon: <LogOut size={20} />,
      detail: "Firebase 로그인 기능을 연결하면 실제 로그아웃 기능을 사용할 수 있습니다.",
    },
    {
      id: "version",
      title: "버전 정보",
      desc: "학원 안가니? v0.1.0",
      icon: <Info size={20} />,
      detail: isCloudSyncEnabled()
        ? "현재 버전은 가족 공유 저장소와 연결되어 엄마·아빠·아이 화면에서 같은 일정을 볼 수 있습니다."
        : "현재 버전은 기기별 저장 모드입니다. Firebase 주소를 입력하면 가족 공유 모드로 사용할 수 있습니다.",
    },
  ];

  return (
    <Card className="mb-4 rounded-3xl border-0 bg-white shadow-lg">
      <CardContent className="p-4">
        <div className="mb-4 flex items-center gap-3">
          <div className="rounded-full bg-emerald-100 p-2 text-emerald-700">
            <Smartphone size={20} />
          </div>
          <div>
            <p className="font-black">설정</p>
            <p className="text-xs text-slate-500">앱 정보와 사용 설정을 관리합니다.</p>
          </div>
        </div>

        {role !== "parent" && (
          <div className="mb-3 rounded-3xl border border-amber-100 bg-amber-50 p-3 text-sm font-bold leading-6 text-amber-700">
            설정 내용은 확인만 할 수 있어요. 수정은 부모용 화면에서 가능합니다.
          </div>
        )}

        <div className="space-y-2">
          {settingItems.map((item) => (
            <div key={item.id}>
              <button
                type="button"
                onClick={() => setSelectedSetting((prev) => (prev === item.id ? null : item.id))}
                className="flex w-full items-center justify-between gap-3 rounded-2xl bg-slate-50 p-4 text-left transition hover:bg-slate-100"
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-white p-2 text-slate-700 shadow-sm">{item.icon}</div>
                  <div>
                    <p className="font-black text-slate-900">{item.title}</p>
                    <p className="mt-1 text-xs text-slate-500">{item.desc}</p>
                  </div>
                </div>
                <span className="text-xs font-bold text-slate-400">{selectedSetting === item.id ? "접기" : "보기"}</span>
              </button>

              {selectedSetting === item.id && (
                <div className="mt-2 rounded-2xl border border-slate-100 bg-white p-3 text-sm text-slate-600">
                  {item.id === "alarm" ? (
                    <div className="space-y-3">
                      <p>{item.detail}</p>
                      <select
                        value={defaultAlertTime}
                        onChange={(e) => onDefaultAlertTimeChange(e.target.value)}
                        disabled={!canEditSettings}
                        className="w-full rounded-2xl border border-emerald-100 bg-white px-4 py-3 text-sm font-bold outline-none focus:border-emerald-400"
                      >
                        <option>5분 전</option>
                        <option>10분 전</option>
                        <option>15분 전</option>
                        <option>20분 전</option>
                        <option>30분 전</option>
                      </select>
                      <p className="rounded-2xl bg-emerald-50 p-3 text-xs font-bold text-emerald-700">
                        현재 기본 알림: {defaultAlertTime}
                      </p>
                    </div>
                  ) : item.id === "familyCode" ? (
                    <div className="space-y-3">
                      <p>{item.detail}</p>
                      <div className="rounded-2xl bg-rose-50 p-3 text-xs font-bold leading-5 text-rose-600">
                        현재 가족코드: {familyShareCode}
                      </div>
                      <div className="flex gap-2">
                        <input
                          value={familyCodeInput}
                          onChange={(e) => setFamilyCodeInput(e.target.value)}
                          disabled={!canEditSettings}
                          placeholder="예: 우리집, minjun-family"
                          className="min-w-0 flex-1 rounded-2xl border border-rose-100 bg-white px-4 py-3 text-sm font-bold outline-none focus:border-rose-300"
                        />
                        <Button className="shrink-0 rounded-2xl" onClick={onApplyFamilyShareCode} disabled={!canEditSettings}>
                          적용
                        </Button>
                      </div>
                      <p className="rounded-2xl bg-slate-50 p-3 text-xs font-bold leading-5 text-slate-500">
                        다른 가족이 이 앱을 쓰려면 자기 가족만의 코드를 입력하면 됩니다. 같은 코드를 입력한 사람끼리만 같은 데이터를 봅니다.
                      </p>
                    </div>
                  ) : item.id === "profile" ? (
                    <div className="space-y-4">
                      <p>{item.detail}</p>

                      <div className="rounded-3xl bg-rose-50 p-3">
                        <p className="mb-2 text-sm font-black text-rose-600">부모 연락처</p>
                        <div className="space-y-2">
                          {(familyInfo?.parents || []).map((parent, index) => (
                            <div key={parent.id || index} className="grid grid-cols-3 gap-2">
                              <input
                                value={parent.label || ""}
                                onChange={(e) => updateParentInfo(index, "label", e.target.value)}
                                disabled={!canEditSettings}
                                placeholder="호칭"
                                className="rounded-2xl border border-rose-100 bg-white px-3 py-2 text-sm font-bold outline-none focus:border-rose-300"
                              />
                              <input
                                value={parent.name || ""}
                                onChange={(e) => updateParentInfo(index, "name", e.target.value)}
                                disabled={!canEditSettings}
                                placeholder="이름"
                                className="rounded-2xl border border-rose-100 bg-white px-3 py-2 text-sm outline-none focus:border-rose-300"
                              />
                              <input
                                value={parent.phone || ""}
                                onChange={(e) => updateParentInfo(index, "phone", e.target.value)}
                                disabled={!canEditSettings}
                                placeholder="연락처"
                                className="rounded-2xl border border-rose-100 bg-white px-3 py-2 text-sm outline-none focus:border-rose-300"
                              />
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="rounded-3xl bg-orange-50 p-3">
                        <div className="mb-2 flex items-center justify-between">
                          <p className="text-sm font-black text-orange-600">아이 정보</p>
                          <Button size="sm" className="rounded-xl" onClick={addChildInfo} disabled={!canEditSettings}>
                            <Plus size={14} className="mr-1" /> 아이 추가
                          </Button>
                        </div>
                        <div className="space-y-2">
                          {(familyInfo?.children || []).map((child, index) => (
                            <div key={child.id || index} className="rounded-3xl bg-white/70 p-2">
                              <div className="grid grid-cols-[1fr_1fr_auto] gap-2">
                                <input
                                  value={child.name || ""}
                                  onChange={(e) => updateChildInfo(index, "name", e.target.value)}
                                  disabled={!canEditSettings}
                                  placeholder="아이 이름"
                                  className="min-w-0 rounded-2xl border border-orange-100 bg-white px-3 py-2 text-sm font-bold outline-none focus:border-orange-300"
                                />
                                <input
                                  value={child.grade || ""}
                                  onChange={(e) => updateChildInfo(index, "grade", e.target.value)}
                                  disabled={!canEditSettings}
                                  placeholder="학년 예: 초3"
                                  className="min-w-0 rounded-2xl border border-orange-100 bg-white px-3 py-2 text-sm outline-none focus:border-orange-300"
                                />
                                <button
                                  type="button"
                                  onClick={() => deleteChildInfo(index)}
                                  disabled={!canEditSettings || (familyInfo?.children || []).length <= 1}
                                  className="rounded-2xl border border-red-100 bg-white px-3 py-2 text-xs font-black text-red-400 transition hover:bg-red-50 disabled:opacity-30"
                                  title="아이 정보 삭제"
                                >
                                  삭제
                                </button>
                              </div>
                              <input
                                value={child.phone || ""}
                                onChange={(e) => updateChildInfo(index, "phone", e.target.value)}
                                disabled={!canEditSettings}
                                placeholder="아이 핸드폰 번호 예: 01012345678"
                                className="mt-2 w-full rounded-2xl border border-orange-100 bg-white px-3 py-2 text-sm outline-none focus:border-orange-300"
                              />
                            </div>
                          ))}
                        </div>
                      </div>

                      <p className="rounded-2xl bg-slate-50 p-3 text-xs font-bold leading-5 text-slate-500">
                        입력한 정보는 자동 저장됩니다. Firebase 가족 공유가 켜져 있으면 다른 휴대폰에도 같이 반영됩니다.
                      </p>
                    </div>
                  ) : item.id === "parentLock" ? (
                    <div className="space-y-3">
                      <p>{item.detail}</p>
                      <div className="rounded-2xl bg-rose-50 p-3 text-xs font-bold text-rose-600">
                        현재 상태: {parentSecurity?.lockEnabled ? "잠금 켜짐" : "잠금 해제"}
                      </div>
                      <div className="flex gap-2">
                        <input
                          type="password"
                          inputMode="numeric"
                          value={passwordInput}
                          onChange={(e) => setPasswordInput(e.target.value)}
                          disabled={!canEditSettings}
                          placeholder="새 비밀번호 4자리 이상"
                          className="min-w-0 flex-1 rounded-2xl border border-rose-100 bg-white px-4 py-3 text-sm font-bold outline-none focus:border-rose-300"
                        />
                        <Button className="shrink-0 rounded-2xl" onClick={handleSavePassword} disabled={!canEditSettings}>
                          저장
                        </Button>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <Button
                          variant={parentSecurity?.lockEnabled ? "secondary" : "outline"}
                          className="rounded-2xl"
                          onClick={() => handleToggleLock(true)}
                          disabled={!canEditSettings}
                        >
                          <Lock size={16} className="mr-1" /> 잠금
                        </Button>
                        <Button
                          variant={!parentSecurity?.lockEnabled ? "secondary" : "outline"}
                          className="rounded-2xl"
                          onClick={() => handleToggleLock(false)}
                          disabled={!canEditSettings}
                        >
                          <Unlock size={16} className="mr-1" /> 해제
                        </Button>
                      </div>
                      {passwordMessage && (
                        <p className="rounded-2xl bg-slate-50 p-3 text-xs font-bold text-slate-600">{passwordMessage}</p>
                      )}
                    </div>
                  ) : (
                    item.detail
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-4 grid grid-cols-2 gap-2">
          <Button className="rounded-2xl" onClick={onShare}>
            <Share2 size={16} className="mr-2" /> 공유
          </Button>
          <Button variant="outline" className="rounded-2xl" onClick={onCopy}>
            <Copy size={16} className="mr-2" /> 링크 복사
          </Button>
        </div>
        {copyMessage && <p className="mt-2 rounded-2xl bg-emerald-50 p-2 text-center text-xs font-bold text-emerald-700">{copyMessage}</p>}
      </CardContent>
    </Card>
  );
}

function ChildView({
  child,
  current,
  selectedDay,
  updateStatus,
  schedules,
  hadSchedulesToday,
  selectedDate,
  locationChecks,
  saveLocationCheck,
  parentContacts,
  showAdd,
  setShowAdd,
  newSchedule,
  updateNewSchedule,
  addSchedule,
  cancelScheduleForm,
  selectedDateLabel,
}) {
  const [showContactOptions, setShowContactOptions] = useState(false);
  const [locationMessage, setLocationMessage] = useState("");
  const [isCheckingLocation, setIsCheckingLocation] = useState(false);
  const contacts = parentContacts?.filter((parent) => parent.phone?.trim()) || [];
  const smsText = encodeURIComponent(`${child.name} 연락이 필요해요.`);
  const nextSchedule = getNextRemainingSchedule(schedules, getNowMinutes(), current?.id);
  const currentLocationCheck = current ? locationChecks?.[current.id] : null;

  const checkCurrentLocation = () => {
    if (!current) return;
    if (typeof navigator === "undefined" || !navigator.geolocation) {
      setLocationMessage("이 브라우저에서는 위치 확인을 지원하지 않아요.");
      return;
    }

    setIsCheckingLocation(true);
    setLocationMessage("현재 위치를 확인하는 중이에요...");

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const locationData = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          accuracy: Math.round(position.coords.accuracy || 0),
          time: new Date().toLocaleTimeString("ko-KR", { hour: "2-digit", minute: "2-digit" }),
          scheduleTitle: current.title,
          place: current.place,
          address: current.address,
        };
        saveLocationCheck(current.id, locationData);
        setLocationMessage("위치 확인이 완료됐어요.");
        setIsCheckingLocation(false);
      },
      () => {
        setLocationMessage("위치 권한이 거부되었거나 위치를 확인할 수 없어요.");
        setIsCheckingLocation(false);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      }
    );
  }; 

  if (!current) {
    const activityTips = getMeaningfulActivities(child.id, selectedDay);
    const finishedToday = hadSchedulesToday && !isFutureDate(selectedDate);
    const noScheduleTitle = finishedToday ? "오늘 일정은 모두 지나갔어요" : getNoScheduleTitle(selectedDate);
    const noScheduleDescription = finishedToday
      ? "지나간 일정은 홈 화면에서 숨기고, 남은 시간은 편안하게 정리해요."
      : getNoScheduleDescription(selectedDate);

    return (
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="space-y-3">
        <Card className="overflow-hidden rounded-[2rem] border border-rose-100 bg-white/90 shadow-lg shadow-rose-100/70">
          <CardContent className="p-5 text-center">
            <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-rose-100 text-2xl">
              🌷
            </div>
            <p className="text-xs font-bold text-rose-400">
              {child.name} · {selectedDay}요일
            </p>
            <h2 className="mt-2 text-2xl font-black text-slate-900">
              {noScheduleTitle}
            </h2>
            <p className="mt-2 break-keep text-sm leading-6 text-slate-500">
              {noScheduleDescription}
            </p>
          </CardContent>
        </Card>

        <ChildScheduleAddBox
          showAdd={showAdd}
          setShowAdd={setShowAdd}
          newSchedule={newSchedule}
          updateNewSchedule={updateNewSchedule}
          addSchedule={addSchedule}
          cancelScheduleForm={cancelScheduleForm}
          selectedDateLabel={selectedDateLabel}
          child={child}
        />

        {finishedToday ? (
          <Card className="rounded-[2rem] border border-rose-100 bg-white/90 shadow-md shadow-rose-100/60">
            <CardContent className="p-5 text-center">
              <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-rose-50 text-2xl shadow-sm">
                🌙
              </div>
              <p className="text-xs font-bold text-rose-400">오늘의 마무리 글귀</p>
              <p className="mt-2 break-keep text-lg font-black leading-8 text-slate-800">
                “오늘 해야 할 일을 해낸 것만으로도 충분히 멋져요. 이제 마음도 쉬어갈 시간이에요.”
              </p>
              <p className="mt-3 text-xs font-bold text-slate-400">{child.name}이는 오늘도 잘 해냈어요.</p>
            </CardContent>
          </Card>
        ) : (
          <Card className="rounded-[2rem] border border-orange-100 bg-white/90 shadow-md shadow-orange-100/60">
            <CardContent className="p-4">
              <div className="mb-3 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-orange-400">오늘 스스로 해볼 일</p>
                  <p className="text-lg font-black text-slate-900">작은 실천 3가지</p>
                </div>
                <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-black text-orange-500">혼자서도 OK</span>
              </div>

              <div className="space-y-2">
                {activityTips.map((tip) => (
                  <div key={tip.title} className="flex items-center gap-3 rounded-3xl bg-orange-50/70 p-3 text-left">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-xl shadow-sm">
                      {tip.icon}
                    </div>
                    <div>
                      <p className="font-black text-slate-900">{tip.title}</p>
                      <p className="mt-0.5 break-keep text-xs leading-5 text-slate-500">{tip.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        <ChildHopeQuote child={child} selectedDay={selectedDay} />
      </motion.div>
    );
  }

  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
      <Card className="overflow-hidden rounded-[2rem] border border-rose-100 bg-white/90 shadow-lg shadow-rose-100/70">
        <CardContent className="p-4">
          <div className="mb-3 flex items-center justify-between">
            <div>
              <p className="text-xs font-bold text-slate-400">지금 보고 있는 아이</p>
              <div className="mt-1 inline-flex items-center rounded-full bg-rose-100 px-3 py-1 text-sm font-black text-rose-600">
                {child.name} · {child.grade}
              </div>
              <h2 className="mt-2 text-3xl font-black text-rose-500">{current.title}</h2>
            </div>
            <button
              type="button"
              onClick={checkCurrentLocation}
              disabled={isCheckingLocation}
              className="rounded-full bg-rose-100 p-3 text-rose-500 transition hover:bg-rose-200 disabled:opacity-60"
              title="위치 확인"
            >
              <Navigation size={28} />
            </button>
          </div>

          <div className="mb-3 rounded-3xl bg-rose-50 p-3">
            <div className="mb-1 flex items-center gap-2 text-base font-black">
              <MapPin size={20} />
              {current.place}
            </div>
            <p className="text-xs text-slate-500">{current.address}</p>
          </div>

          <div className="grid grid-cols-2 gap-1.5 text-sm">
            <InfoBox compact icon={<Clock size={16} />} label="시간" value={`${current.start} ~ ${current.end}`} />
            <InfoBox compact icon={<Bell size={16} />} label="알림" value={current.alert} />
            <InfoBox compact icon={<Home size={16} />} label="이동" value={current.transport} />
            <InfoBox compact icon={<CalendarDays size={16} />} label="준비물" value={current.items} />
          </div>

          {(locationMessage || currentLocationCheck) && (
            <div className="mt-3 rounded-2xl border border-cyan-100 bg-cyan-50 p-3 text-sm text-cyan-800">
              <p className="font-bold">{locationMessage || "위치 확인 완료"}</p>
              {currentLocationCheck && (
                <div className="mt-1 text-xs leading-5 text-cyan-700">
                  <p>장소: {currentLocationCheck.place || current.place}</p>
                  <p>상세 위치: {currentLocationCheck.address || current.address}</p>
                  <p>확인 시간: {currentLocationCheck.time}</p>
                  <p>위치 상태: {getLocationAccuracyLabel(currentLocationCheck.accuracy)}</p>
                </div>
              )}
            </div>
          )}

          <div className="mt-2 rounded-3xl bg-pink-50 p-3 text-pink-900">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-xs font-bold text-pink-500">다음에 할 일</p>
                {nextSchedule ? (
                  <p className="mt-1 text-lg font-black text-pink-900">{nextSchedule.title}</p>
                ) : (
                  <p className="mt-1 text-lg font-black text-pink-300">없음</p>
                )}
              </div>
              {nextSchedule ? (
                <div className="text-right">
                  <p className="text-sm font-black text-pink-900">{nextSchedule.start}</p>
                  <p className="mt-1 max-w-[120px] truncate text-xs text-pink-500">{nextSchedule.place}</p>
                </div>
              ) : (
                <p className="text-right text-xs text-pink-400">오늘 남은 일정이 없어요</p>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-2">
        <div className="grid grid-cols-2 gap-2">
          <Button
            className="h-12 rounded-3xl border-2 border-emerald-300 bg-emerald-100 text-base font-black text-emerald-900 shadow-sm hover:bg-emerald-200"
            onClick={() => updateStatus(current.id, "도착 완료")}
          >
            <CheckCircle2 className="mr-2" /> 도착했어요
          </Button>
          <Button
            className="h-12 rounded-3xl border-2 border-blue-500 bg-blue-500 text-base font-black text-white shadow-sm hover:bg-blue-600"
            onClick={() => updateStatus(current.id, "끝남")}
          >
            끝났어요
          </Button>
        </div>
        <Button
          className="h-12 w-full rounded-3xl border-2 border-amber-300 bg-amber-100 text-base font-black text-amber-900 shadow-sm hover:bg-amber-200"
          onClick={() => updateStatus(current.id, "귀가 완료")}
        >
          <Home className="mr-2" size={22} /> 집에 왔어요
        </Button>
      </div>

      <ChildScheduleAddBox
        showAdd={showAdd}
        setShowAdd={setShowAdd}
        newSchedule={newSchedule}
        updateNewSchedule={updateNewSchedule}
        addSchedule={addSchedule}
        cancelScheduleForm={cancelScheduleForm}
        selectedDateLabel={selectedDateLabel}
        child={child}
      />

      <ChildHopeQuote child={child} selectedDay={selectedDay} />

      <div className="space-y-2">
        <Button
          variant="outline"
          className="h-11 w-full rounded-3xl text-sm font-bold"
          onClick={() => setShowContactOptions((prev) => !prev)}
        >
          <Phone className="mr-2" size={20} /> 부모님께 연락하기
        </Button>

        {showContactOptions && (
          <div className="rounded-3xl border border-slate-100 bg-white p-3 shadow-sm">
            <p className="mb-2 text-sm font-black text-slate-700">연락할 사람을 선택하세요</p>
            {contacts.length === 0 ? (
              <p className="rounded-2xl bg-slate-50 p-3 text-sm text-slate-500">설정에서 부모 연락처를 입력해주세요.</p>
            ) : (
              <div className="grid grid-cols-2 gap-2">
                {contacts.map((parent) => (
                  <React.Fragment key={parent.id || parent.label}>
                    <a
                      href={`tel:${parent.phone}`}
                      className="flex h-12 items-center justify-center rounded-2xl bg-emerald-600 text-sm font-black text-white"
                    >
                      {parent.label || parent.name} 전화
                    </a>
                    <a
                      href={`sms:${parent.phone}?body=${smsText}`}
                      className="flex h-12 items-center justify-center rounded-2xl border border-slate-200 bg-white text-sm font-black text-slate-700"
                    >
                      {parent.label || parent.name} 문자
                    </a>
                  </React.Fragment>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      
    </motion.div>
  );
}

function ChildScheduleAddBox({
  showAdd,
  setShowAdd,
  newSchedule,
  updateNewSchedule,
  addSchedule,
  cancelScheduleForm,
  selectedDateLabel,
  child,
}) {
  return (
    <Card className="rounded-[2rem] border border-rose-100 bg-white/80 shadow-sm backdrop-blur">
      <CardContent className="p-4">
        <div className="mb-3 flex items-center justify-between gap-3">
          <div>
            <p className="text-xs font-bold text-rose-400">{selectedDateLabel}</p>
            <p className="text-base font-black text-slate-900">{child.name} 일정 직접 추가</p>
          </div>
          <Button
            size="sm"
            variant={showAdd ? "secondary" : "default"}
            className="rounded-2xl"
            onClick={() => (showAdd ? cancelScheduleForm() : setShowAdd(true))}
          >
            {showAdd ? "접기" : "일정 추가"}
          </Button>
        </div>

        {showAdd && (
          <div className="space-y-2">
            <input
              value={newSchedule.title}
              onChange={(e) => updateNewSchedule("title", e.target.value)}
              placeholder="무슨 일정이야? 예: 영어, 친구 약속"
              className="w-full rounded-2xl border border-rose-100 bg-rose-50 px-4 py-3 text-sm font-bold outline-none focus:border-rose-300"
            />
            <div className="grid grid-cols-2 gap-2">
              <input
                type="time"
                value={newSchedule.start}
                onChange={(e) => updateNewSchedule("start", e.target.value)}
                className="w-full rounded-2xl border border-rose-100 bg-white px-4 py-3 text-sm font-bold outline-none focus:border-rose-300"
              />
              <input
                type="time"
                value={newSchedule.end}
                onChange={(e) => updateNewSchedule("end", e.target.value)}
                className="w-full rounded-2xl border border-rose-100 bg-white px-4 py-3 text-sm font-bold outline-none focus:border-rose-300"
              />
            </div>
            <input
              value={newSchedule.place}
              onChange={(e) => updateNewSchedule("place", e.target.value)}
              placeholder="어디에서 해? 예: 영어학원, 집"
              className="w-full rounded-2xl border border-rose-100 bg-white px-4 py-3 text-sm outline-none focus:border-rose-300"
            />
            <input
              value={newSchedule.items}
              onChange={(e) => updateNewSchedule("items", e.target.value)}
              placeholder="준비물 예: 교재, 필통, 물병"
              className="w-full rounded-2xl border border-rose-100 bg-white px-4 py-3 text-sm outline-none focus:border-rose-300"
            />
            <div className="grid grid-cols-2 gap-2">
              <Button variant="outline" className="h-11 rounded-2xl" onClick={cancelScheduleForm}>
                취소
              </Button>
              <Button className="h-11 rounded-2xl" onClick={addSchedule} disabled={!newSchedule.title.trim() || !newSchedule.start.trim()}>
                저장
              </Button>
            </div>
            <p className="rounded-2xl bg-orange-50 p-3 text-center text-xs font-bold text-orange-500">
              달력에서 고른 날짜에 저장돼요.
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

function ChildHopeQuote({ child, selectedDay }) {
  const quote = getChildHopeQuote(child.id, selectedDay);

  return (
    <div className="rounded-[2rem] border border-rose-100 bg-white/75 p-4 text-center shadow-sm backdrop-blur">
      <p className="text-xs font-bold text-rose-400">오늘의 용기 한마디</p>
      <p className="mt-2 break-keep text-base font-black leading-7 text-slate-800">“{quote}”</p>
      <p className="mt-2 text-xs font-bold text-slate-400">{child.name}이는 오늘도 충분히 멋져요 🌱</p>
    </div>
  );
}

function ParentView({
  child,
  selectedDay,
  schedules,
  hadSchedulesToday,
  selectedDate,
  updateStatus,
  showAdd,
  setShowAdd,
  newSchedule,
  updateNewSchedule,
  addSchedule,
  startEditSchedule,
  editingScheduleId,
  cancelScheduleForm,
  requestDeleteSchedule,
  deleteTarget,
  cancelDeleteSchedule,
  confirmDeleteSchedule,
  locationChecks,
}) {
  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
      <Card className="rounded-3xl border-0 bg-white shadow-lg">
        <CardContent className="p-5">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">부모 확인 화면</p>
              <h2 className="text-2xl font-black">
                {child.name} {selectedDay}요일 일정
              </h2>
            </div>
            <Button
              className="rounded-2xl"
              onClick={() => {
                if (showAdd) {
                  cancelScheduleForm();
                } else {
                  setShowAdd(true);
                }
              }}
            >
              <Plus size={18} className="mr-1" /> 일정 추가
            </Button>
          </div>

          {deleteTarget && (
            <div className="mb-4 rounded-3xl border border-red-100 bg-red-50 p-4">
              <div className="mb-3 flex items-start gap-3">
                <div className="rounded-full bg-white p-2 text-red-600">
                  <Trash2 size={20} />
                </div>
                <div>
                  <p className="font-black text-red-700">일정을 삭제할까요?</p>
                  <p className="mt-1 text-sm text-red-700">
                    {deleteTarget.title} · {deleteTarget.day}요일 {deleteTarget.start}
                  </p>
                  <p className="mt-1 text-xs text-red-500">삭제한 일정은 현재 시제품에서는 되돌릴 수 없습니다.</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <Button variant="outline" className="rounded-2xl bg-white" onClick={cancelDeleteSchedule}>
                  취소
                </Button>
                <Button variant="danger" className="rounded-2xl" onClick={confirmDeleteSchedule}>
                  삭제하기
                </Button>
              </div>
            </div>
          )}

          {showAdd && (
            <div className="mb-4 rounded-3xl border border-emerald-100 bg-emerald-50 p-4">
              <div className="mb-3 flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold text-emerald-700">{editingScheduleId ? "일정 수정" : "새 일정 추가"}</p>
                  <p className="text-xs text-slate-500">
                    {child.name} · {selectedDay}요일 일정으로 저장됩니다.
                  </p>
                </div>
                <button onClick={cancelScheduleForm} className="rounded-full bg-white p-2 text-slate-500">
                  <X size={18} />
                </button>
              </div>

              <div className="space-y-2">
                <input
                  value={newSchedule.title}
                  onChange={(e) => updateNewSchedule("title", e.target.value)}
                  placeholder="과목명 예: 영어, 바둑, 파워점핑"
                  className="w-full rounded-2xl border border-emerald-100 bg-white px-4 py-3 text-sm outline-none focus:border-emerald-400"
                />
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="time"
                    value={newSchedule.start}
                    onChange={(e) => updateNewSchedule("start", e.target.value)}
                    className="w-full rounded-2xl border border-emerald-100 bg-white px-4 py-3 text-sm outline-none focus:border-emerald-400"
                  />
                  <input
                    type="time"
                    value={newSchedule.end}
                    onChange={(e) => updateNewSchedule("end", e.target.value)}
                    className="w-full rounded-2xl border border-emerald-100 bg-white px-4 py-3 text-sm outline-none focus:border-emerald-400"
                  />
                </div>
                <input
                  value={newSchedule.place}
                  onChange={(e) => updateNewSchedule("place", e.target.value)}
                  placeholder="장소명 예: ○○영어학원"
                  className="w-full rounded-2xl border border-emerald-100 bg-white px-4 py-3 text-sm outline-none focus:border-emerald-400"
                />
                <input
                  value={newSchedule.address}
                  onChange={(e) => updateNewSchedule("address", e.target.value)}
                  placeholder="상세 위치 예: 상가 3층, 학교 후문 앞"
                  className="w-full rounded-2xl border border-emerald-100 bg-white px-4 py-3 text-sm outline-none focus:border-emerald-400"
                />
                <input
                  value={newSchedule.transport}
                  onChange={(e) => updateNewSchedule("transport", e.target.value)}
                  placeholder="이동방법 예: 도보, 셔틀, 부모 차량"
                  className="w-full rounded-2xl border border-emerald-100 bg-white px-4 py-3 text-sm outline-none focus:border-emerald-400"
                />
                <input
                  value={newSchedule.items}
                  onChange={(e) => updateNewSchedule("items", e.target.value)}
                  placeholder="준비물 예: 교재, 필통, 물병"
                  className="w-full rounded-2xl border border-emerald-100 bg-white px-4 py-3 text-sm outline-none focus:border-emerald-400"
                />
                <select
                  value={newSchedule.alert}
                  onChange={(e) => updateNewSchedule("alert", e.target.value)}
                  className="w-full rounded-2xl border border-emerald-100 bg-white px-4 py-3 text-sm outline-none focus:border-emerald-400"
                >
                  <option>5분 전</option>
                  <option>10분 전</option>
                  <option>15분 전</option>
                  <option>20분 전</option>
                  <option>30분 전</option>
                </select>
              </div>

              <div className="mt-3 grid grid-cols-2 gap-2">
                <Button variant="outline" onClick={cancelScheduleForm} className="h-12 rounded-2xl font-black">
                  취소
                </Button>
                <Button onClick={addSchedule} className="h-12 rounded-2xl font-black" disabled={!newSchedule.title.trim() || !newSchedule.start.trim()}>
                  <Save size={18} className="mr-2" /> {editingScheduleId ? "수정 저장" : "일정 저장"}
                </Button>
              </div>
            </div>
          )}

          <div className="space-y-3">
            {schedules.length === 0 && (
              <NoParentScheduleCard child={child} selectedDay={selectedDay} selectedDate={selectedDate} hadSchedulesToday={hadSchedulesToday} />
            )}
            {schedules.map((s) => (
              <div key={s.id} className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                <div className="mb-2 flex items-start justify-between gap-2">
                  <div>
                    <p className="font-black">{s.title}</p>
                    <p className="text-sm text-slate-500">
                      {s.start} ~ {s.end}
                    </p>
                  </div>
                  <span className={`rounded-full px-3 py-1 text-xs font-bold ${statusStyle[s.status] || "bg-slate-100 text-slate-700"}`}>
                    {s.status}
                  </span>
                </div>
                <p className="mb-1 flex items-center gap-1 text-sm text-slate-700">
                  <MapPin size={15} /> {s.place}
                </p>
                <p className="mb-2 text-sm text-slate-500">
                  이동: {s.transport} · 준비물: {s.items}
                </p>
                {locationChecks?.[s.id] && (
                  <p className="mb-3 rounded-2xl bg-cyan-50 p-2 text-xs font-bold text-cyan-700">
                    위치 확인: {locationChecks[s.id].place || s.place} · {locationChecks[s.id].time} · 위치 상태: {getLocationAccuracyLabel(locationChecks[s.id].accuracy)}
                  </p>
                )}
                <div className="mb-2 grid grid-cols-3 gap-2">
                  <Button size="sm" variant="outline" className="rounded-xl border-emerald-200 text-emerald-700 hover:bg-emerald-50" onClick={() => startEditSchedule(s)}>
                    <Pencil size={14} className="mr-1" /> 수정
                  </Button>
                  <Button size="sm" variant="outline" className="rounded-xl" onClick={() => updateStatus(s.id, "대기")}>
                    대기
                  </Button>
                  <Button size="sm" variant="outline" className="rounded-xl border-red-200 text-red-600 hover:bg-red-50" onClick={() => requestDeleteSchedule(s)}>
                    <Trash2 size={14} className="mr-1" /> 삭제
                  </Button>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  <Button size="sm" variant="outline" className="rounded-xl" onClick={() => updateStatus(s.id, "이동 중")}>
                    이동
                  </Button>
                  <Button size="sm" variant="outline" className="rounded-xl" onClick={() => updateStatus(s.id, "도착 완료")}>
                    도착
                  </Button>
                  <Button size="sm" variant="outline" className="rounded-xl" onClick={() => updateStatus(s.id, "끝남")}>
                    끝남
                  </Button>
                  <Button size="sm" variant="outline" className="rounded-xl border-emerald-200 text-emerald-700 hover:bg-emerald-50" onClick={() => updateStatus(s.id, "귀가 완료")}>
                    귀가
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

function NoParentScheduleCard({ child, selectedDay, selectedDate, hadSchedulesToday }) {
  const reminders = getParentFamilyReminders(child.id, selectedDay);
  const isPast = isPastDate(selectedDate);
  const praise = getParentPastPraise(child.name, selectedDay);

  if (isPast) {
    return (
      <div className="rounded-[2rem] border border-rose-100 bg-gradient-to-br from-rose-50 via-orange-50 to-white p-5 text-center">
        <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-white text-2xl shadow-sm">
          💗
        </div>
        <p className="text-xs font-bold text-rose-400">
          {child.name} · {selectedDay}요일
        </p>
        <p className="mt-2 text-2xl font-black text-slate-900">{praise.title}</p>
        <p className="mt-2 break-keep text-sm leading-6 text-slate-500">{praise.desc}</p>
        <div className="mt-4 rounded-3xl bg-white/80 p-4 text-center shadow-sm">
          <p className="break-keep text-base font-black leading-7 text-rose-600">{praise.quote}</p>
        </div>
        <p className="mt-3 text-xs font-bold text-slate-400">
          지나간 일정은 숨기고, 아이에게 남길 따뜻한 말만 보여줍니다.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-[2rem] border border-rose-100 bg-gradient-to-br from-rose-50 via-orange-50 to-white p-4">
      <div className="mb-4 text-center">
        <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-white text-2xl shadow-sm">
          💞
        </div>
        <p className="text-xs font-bold text-rose-400">
          {child.name} · {selectedDay}요일
        </p>
        <p className="mt-1 text-xl font-black text-slate-900">오늘은 가족 마음을 채우는 날</p>
        <p className="mt-2 break-keep text-sm leading-6 text-slate-500">
          일정이 비어 있는 시간에는 아이에게 사랑과 용기를 전해보세요.
        </p>
      </div>

      <div className="space-y-2">
        {reminders.map((item) => (
          <div key={item.title} className="flex items-center gap-3 rounded-3xl bg-white/80 p-3 text-left shadow-sm">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-rose-50 text-xl">
              {item.icon}
            </div>
            <div>
              <p className="font-black text-slate-900">{item.title}</p>
              <p className="mt-0.5 break-keep text-xs leading-5 text-slate-500">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-3 rounded-3xl bg-white/70 p-3 text-center text-xs font-bold leading-5 text-rose-500">
        오늘도 완벽한 부모보다 따뜻한 부모가 아이에게 더 오래 남습니다.
      </div>
    </div>
  );
}

function NotificationPanel({
  activeAlerts,
  appAlerts,
  permission,
  onRequestPermission,
  onTest,
  onClear,
  onReset,
  notificationEnabled,
  setNotificationEnabled,
  notices,
  newNotice,
  setNewNotice,
  addNotice,
  deleteNotice,
  role,
}) {
  const [showInstallGuide, setShowInstallGuide] = useState(false);
  const [selectedInfoGuide, setSelectedInfoGuide] = useState(null);
  const [selectedNoticeId, setSelectedNoticeId] = useState(null);
  const [showNoticeForm, setShowNoticeForm] = useState(false);
  const selectedNotice = notices.find((notice) => notice.id === selectedNoticeId) || null;

  const handleAddNotice = () => {
    addNotice();
    setShowNoticeForm(false);
  };

  const appNotificationLabel = notificationEnabled ? "앱 알림 ON" : "앱 알림 OFF";

  const permissionLabel =
    {
      granted: "알림 허용 완료",
      denied: "알림 차단됨",
      default: "알림 허용 필요",
      unsupported: "브라우저 미지원",
    }[permission] || "알림 확인 필요";

  const permissionStatusStyle =
    {
      granted: {
        box: "border-emerald-200 bg-emerald-50 text-emerald-800",
        badge: "bg-emerald-500 text-white",
        dot: "bg-emerald-500",
        message: "알림이 허용되어 있어요. 일정 시간이 되면 휴대폰 알림을 받을 수 있습니다.",
        buttonText: "허용 완료",
      },
      denied: {
        box: "border-red-200 bg-red-50 text-red-800",
        badge: "bg-red-500 text-white",
        dot: "bg-red-500",
        message: "알림이 차단되어 있어요. 브라우저 또는 휴대폰 설정에서 알림을 다시 허용해야 합니다.",
        buttonText: "차단됨",
      },
      unsupported: {
        box: "border-slate-200 bg-slate-50 text-slate-700",
        badge: "bg-slate-500 text-white",
        dot: "bg-slate-400",
        message: "현재 브라우저에서는 알림 기능을 지원하지 않습니다.",
        buttonText: "미지원",
      },
      default: {
        box: "border-amber-200 bg-amber-50 text-amber-800",
        badge: "bg-amber-500 text-white",
        dot: "bg-amber-500",
        message: "아직 알림 권한을 허용하지 않았어요. 알림 허용 버튼을 누르면 일정 전 알림을 받을 수 있습니다.",
        buttonText: "알림 허용",
      },
    }[permission] || {
      box: "border-amber-200 bg-amber-50 text-amber-800",
      badge: "bg-amber-500 text-white",
      dot: "bg-amber-500",
      message: "알림 상태를 확인해주세요.",
      buttonText: "알림 허용",
    };

  return (
    <Card className="rounded-3xl border-0 bg-white shadow-lg">
      <CardContent className="p-4">
        <div className="mb-3 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <div className="rounded-full bg-blue-100 p-2 text-blue-700">
              <Bell size={20} />
            </div>
            <div>
              <p className="font-black">공지사항</p>
              <p className="text-xs text-slate-500">
                {role === "parent" ? "가족에게 보여줄 공지를 작성합니다." : "부모님이 남긴 공지를 확인합니다."}
              </p>
            </div>
          </div>

        </div>

        {role === "parent" && (
          <div className="mb-3">
            <Button
              className="h-11 w-full rounded-2xl"
              variant={showNoticeForm ? "secondary" : "default"}
              onClick={() => setShowNoticeForm((prev) => !prev)}
            >
              <Plus size={16} className="mr-1" /> {showNoticeForm ? "공지 작성 접기" : "공지 작성"}
            </Button>

            {showNoticeForm && (
              <div className="mt-2 rounded-3xl border border-rose-100 bg-rose-50 p-3">
                <p className="mb-2 text-sm font-black text-rose-600">부모님 공지 작성</p>
                <input
                  value={newNotice.title}
                  onChange={(e) => setNewNotice((prev) => ({ ...prev, title: e.target.value }))}
                  placeholder="제목 예: 오늘은 영어 숙제 먼저 하기"
                  className="mb-2 w-full rounded-2xl border border-rose-100 bg-white px-4 py-3 text-sm font-bold outline-none focus:border-rose-300"
                />
                <textarea
                  value={newNotice.body}
                  onChange={(e) => setNewNotice((prev) => ({ ...prev, body: e.target.value }))}
                  placeholder="내용 예: 학원 다녀와서 물 마시고 10분 쉬었다가 숙제하자. 오늘도 잘하고 있어!"
                  rows={3}
                  className="w-full resize-none rounded-2xl border border-rose-100 bg-white px-4 py-3 text-sm leading-6 outline-none focus:border-rose-300"
                />
                <div className="mt-2 grid grid-cols-2 gap-2">
                  <Button variant="outline" className="h-11 rounded-2xl bg-white" onClick={() => setShowNoticeForm(false)}>
                    취소
                  </Button>
                  <Button
                    className="h-11 rounded-2xl"
                    onClick={handleAddNotice}
                    disabled={!newNotice.title.trim() && !newNotice.body.trim()}
                  >
                    공지 등록
                  </Button>
                </div>
              </div>
            )}
          </div>
        )}

        <section className="mb-3 rounded-3xl border-2 border-rose-100 bg-white p-3 shadow-sm">
          <div className="mb-3 flex items-center gap-2">
            <div className="rounded-full bg-rose-100 px-2.5 py-1 text-xs font-black text-rose-600">공지</div>
            <div>
              <p className="text-sm font-black text-slate-900">가족 공지글</p>
              
            </div>
          </div>
          {!selectedNotice ? (
            <>
              <div className="mb-3 flex items-center justify-between">
                <div>
                  <p className="text-sm font-black text-slate-900">가족 공지</p>
                  
                </div>
                <span className="rounded-full bg-orange-50 px-2 py-1 text-[10px] font-black text-orange-500">{notices.length}개</span>
              </div>

              {notices.length === 0 ? (
                <p className="rounded-2xl bg-slate-50 p-3 text-sm text-slate-500">
                  아직 작성된 가족 공지사항이 없습니다.
                </p>
              ) : (
                <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white">
                  {notices.map((notice, index) => (
                    <div
                      key={notice.id}
                      className={`flex items-center gap-2 px-3 py-3 ${index !== notices.length - 1 ? "border-b border-slate-100" : ""}`}
                    >
                      <button
                        type="button"
                        onClick={() => setSelectedNoticeId(notice.id)}
                        className="min-w-0 flex-1 text-left"
                      >
                        <div className="flex min-w-0 items-center gap-2">
                          <span className="shrink-0 text-sm font-black text-rose-500">[공지]</span>
                          <span className="truncate text-sm font-black text-slate-900">{notice.title}</span>
                          <span className="shrink-0 text-[11px] font-bold text-slate-400">{notice.time}</span>
                        </div>
                      </button>
                      {role === "parent" && (
                        <button
                          type="button"
                          onClick={() => deleteNotice(notice.id)}
                          className="shrink-0 rounded-full bg-slate-50 p-2 text-slate-300 hover:bg-red-50 hover:text-red-400"
                          title="공지 삭제"
                        >
                          <Trash2 size={14} />
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </>
          ) : (
            <div className="rounded-2xl bg-white p-1">
              <div className="mb-3 flex items-center justify-between gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedNoticeId(null)}
                  className="rounded-full bg-slate-100 px-3 py-2 text-xs font-black text-slate-600"
                >
                  ← 목록
                </button>
                {role === "parent" && (
                  <button
                    type="button"
                    onClick={() => {
                      deleteNotice(selectedNotice.id);
                      setSelectedNoticeId(null);
                    }}
                    className="rounded-full bg-red-50 px-3 py-2 text-xs font-black text-red-500"
                  >
                    삭제
                  </button>
                )}
              </div>

              <article className="rounded-3xl border border-slate-100 bg-slate-50 p-4">
                <div className="mb-3 border-b border-slate-200 pb-3">
                  <span className="mb-2 inline-flex rounded-full bg-rose-100 px-2.5 py-1 text-[10px] font-black text-rose-600">[공지]</span>
                  <h2 className="break-keep text-xl font-black leading-7 text-slate-900">{selectedNotice.title}</h2>
                  <p className="mt-2 text-xs font-bold text-slate-400">
                    {selectedNotice.author} · {selectedNotice.time}
                  </p>
                </div>
                <p className="whitespace-pre-line break-keep text-sm font-medium leading-7 text-slate-700">
                  {selectedNotice.body || "공지 내용이 없습니다."}
                </p>
              </article>
            </div>
          )}
        </section>

        <section className="mb-3 rounded-3xl border-2 border-blue-100 bg-white p-3 shadow-sm">
          <div className="mb-3 flex items-center gap-2">
            <div className="rounded-full bg-blue-100 px-2.5 py-1 text-xs font-black text-blue-600">안내</div>
            <div>
              <p className="text-sm font-black text-slate-900">앱 사용 안내</p>
              <p className="text-xs text-slate-400">필요한 안내를 눌러 자세히 확인하세요.</p>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white">
            <button
              type="button"
              onClick={() => setSelectedInfoGuide((prev) => (prev === "familyStart" ? null : "familyStart"))}
              className="flex w-full items-center justify-between gap-3 border-b border-slate-100 px-3 py-3 text-left"
            >
              <div className="flex min-w-0 items-center gap-2">
                <div className="rounded-full bg-rose-50 p-2 text-rose-600">
                  <UserCog size={16} />
                </div>
                <div className="min-w-0">
                  <p className="truncate text-sm font-black text-slate-900">처음 사용하는 가족 설정 안내</p>
                  <p className="mt-0.5 text-xs font-bold text-slate-400">가족코드와 가족정보 입력 순서</p>
                </div>
              </div>
              <span className="shrink-0 rounded-full bg-blue-50 px-2 py-1 text-xs font-black text-blue-600">
                {selectedInfoGuide === "familyStart" ? "접기" : "보기"}
              </span>
            </button>

            {selectedInfoGuide === "familyStart" && (
              <div className="border-b border-slate-100 bg-rose-50/60 px-4 py-3 text-sm text-slate-700">
                <p className="mb-2 font-black text-slate-900">처음 쓰는 가족은 이렇게 설정하세요</p>
                <div className="space-y-2">
                  <div className="rounded-2xl bg-white p-3">
                    <p className="font-bold text-slate-900">1. 부모용 화면으로 들어가기</p>
                    <p className="mt-1 text-xs leading-5 text-slate-600">아이 정보와 가족코드는 부모용에서만 수정할 수 있습니다.</p>
                  </div>
                  <div className="rounded-2xl bg-white p-3">
                    <p className="font-bold text-slate-900">2. 설정 → 가족코드 설정</p>
                    <p className="mt-1 text-xs leading-5 text-slate-600">우리 가족만 쓸 코드를 입력하세요. 예: minjun-home-2026</p>
                  </div>
                  <div className="rounded-2xl bg-white p-3">
                    <p className="font-bold text-slate-900">3. 설정 → 내정보관리</p>
                    <p className="mt-1 text-xs leading-5 text-slate-600">부모 연락처, 아이 이름, 학년, 아이 핸드폰 번호를 입력하세요.</p>
                  </div>
                  <div className="rounded-2xl bg-white p-3">
                    <p className="font-bold text-slate-900">4. 같은 가족코드를 가족 휴대폰에도 입력</p>
                    <p className="mt-1 text-xs leading-5 text-slate-600">엄마, 아빠, 아이 휴대폰이 같은 가족코드를 쓰면 일정과 공지가 함께 보입니다.</p>
                  </div>
                  <div className="rounded-2xl bg-white p-3">
                    <p className="font-bold text-slate-900">5. 부모용 잠금 설정</p>
                    <p className="mt-1 text-xs leading-5 text-slate-600">아이들이 설정을 바꾸지 못하도록 부모용 비밀번호를 만들어주세요.</p>
                  </div>
                </div>
              </div>
            )}

            <button
              type="button"
              onClick={() => setSelectedInfoGuide((prev) => (prev === "alarm" ? null : "alarm"))}
              className="flex w-full items-center justify-between gap-3 border-b border-slate-100 px-3 py-3 text-left"
            >
              <div className="flex min-w-0 items-center gap-2">
                <div className="rounded-full bg-slate-100 p-2 text-slate-600">
                  <Bell size={16} />
                </div>
                <div className="min-w-0">
                  <p className="truncate text-sm font-black text-slate-900">알림 현재상태</p>
                  <div className="mt-1 flex items-center gap-1.5">
                    <span className={`h-2 w-2 rounded-full ${notificationEnabled ? "bg-emerald-500" : "bg-slate-400"}`} />
                    <p className="text-xs font-black text-slate-500">{appNotificationLabel} · {permissionLabel}</p>
                  </div>
                </div>
              </div>
              <span className="shrink-0 rounded-full bg-blue-50 px-2 py-1 text-xs font-black text-blue-600">
                {selectedInfoGuide === "alarm" ? "접기" : "보기"}
              </span>
            </button>

            {selectedInfoGuide === "alarm" && (
              <div className="border-b border-slate-100 bg-slate-50 px-4 py-3 text-sm text-slate-600">
                <div className={`rounded-2xl border-2 p-3 ${notificationEnabled ? permissionStatusStyle.box : "border-slate-200 bg-slate-50 text-slate-700"}`}>
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className={`h-3 w-3 rounded-full ${notificationEnabled ? permissionStatusStyle.dot : "bg-slate-400"}`} />
                      <p className="font-black">앱 알림 상태: {appNotificationLabel}</p>
                    </div>
                    <span className={`rounded-full px-2.5 py-1 text-[10px] font-black ${notificationEnabled ? "bg-emerald-500 text-white" : "bg-slate-400 text-white"}`}>
                      {notificationEnabled ? "ON" : "OFF"}
                    </span>
                  </div>
                  <p className="mt-2 break-keep text-xs font-bold leading-5">
                    {notificationEnabled
                      ? "앱 알림이 켜져 있어요. 아래 휴대폰 알림 권한까지 허용하면 일정 전 알림을 더 잘 받을 수 있습니다."
                      : "앱 알림이 꺼져 있어요. 일정 전 화면 알림과 테스트 알림이 표시되지 않습니다."}
                  </p>
                  <div className="mt-3 grid grid-cols-2 gap-2">
                    <Button
                      size="sm"
                      className={`rounded-xl ${notificationEnabled ? "bg-emerald-500 text-white hover:bg-emerald-600" : "bg-white text-slate-500"}`}
                      onClick={() => setNotificationEnabled(true)}
                      disabled={notificationEnabled}
                    >
                      알림 ON
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className={`rounded-xl ${!notificationEnabled ? "bg-slate-200 text-slate-700" : "bg-white"}`}
                      onClick={() => setNotificationEnabled(false)}
                      disabled={!notificationEnabled}
                    >
                      알림 OFF
                    </Button>
                  </div>
                </div>

                <div className={`mt-3 rounded-2xl border-2 p-3 ${permissionStatusStyle.box}`}>
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className={`h-3 w-3 rounded-full ${permissionStatusStyle.dot}`} />
                      <p className="font-black">휴대폰 권한: {permissionLabel}</p>
                    </div>
                    <span className={`rounded-full px-2.5 py-1 text-[10px] font-black ${permissionStatusStyle.badge}`}>
                      {permission === "granted" ? "허용" : permission === "denied" ? "차단" : "확인 필요"}
                    </span>
                  </div>
                  <p className="mt-2 break-keep text-xs font-bold leading-5">
                    {permissionStatusStyle.message}
                  </p>
                </div>

                <div className="mt-3 grid grid-cols-2 gap-2">
                  <Button
                    size="sm"
                    variant={permission === "default" ? "default" : "outline"}
                    className={`rounded-xl ${permission === "default" ? "bg-amber-500 text-white hover:bg-amber-600" : "bg-white"}`}
                    onClick={onRequestPermission}
                    disabled={permission === "granted" || permission === "unsupported"}
                  >
                    {permissionStatusStyle.buttonText}
                  </Button>
                  <Button size="sm" variant="outline" className="rounded-xl bg-white" onClick={onTest}>
                    테스트 알림
                  </Button>
                </div>
                <p className="mt-2 text-[11px] font-bold leading-5 text-slate-400">
                  알림 허용 전에는 앱 안 알림만 보일 수 있고, 허용 후에는 휴대폰 알림도 받을 수 있습니다.
                </p>
              </div>
            )}

            <button
              type="button"
              onClick={() => setSelectedInfoGuide((prev) => (prev === "install" ? null : "install"))}
              className="flex w-full items-center justify-between gap-3 px-3 py-3 text-left"
            >
              <div className="flex min-w-0 items-center gap-2">
                <div className="rounded-full bg-blue-50 p-2 text-blue-600">
                  <Smartphone size={16} />
                </div>
                <div className="min-w-0">
                  <p className="truncate text-sm font-black text-slate-900">휴대폰 앱처럼 쓰기 안내</p>
                  <p className="mt-0.5 text-xs font-bold text-slate-400">홈 화면에 추가하는 방법</p>
                </div>
              </div>
              <span className="shrink-0 rounded-full bg-blue-50 px-2 py-1 text-xs font-black text-blue-600">
                {selectedInfoGuide === "install" ? "접기" : "보기"}
              </span>
            </button>

            {selectedInfoGuide === "install" && (
              <div className="bg-blue-50/60 px-4 py-3 text-sm text-slate-700">
                <p className="mb-2 font-black text-slate-900">홈 화면에 추가하는 방법</p>
                <div className="space-y-2">
                  <div className="rounded-2xl bg-white p-3">
                    <p className="font-bold text-slate-900">안드로이드 Chrome</p>
                    <p className="mt-1 text-xs leading-5 text-slate-600">오른쪽 위 점 3개 → 홈 화면에 추가 → 추가</p>
                  </div>
                  <div className="rounded-2xl bg-white p-3">
                    <p className="font-bold text-slate-900">아이폰 Safari</p>
                    <p className="mt-1 text-xs leading-5 text-slate-600">아래 공유 버튼 → 홈 화면에 추가 → 추가</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {activeAlerts.length > 0 && (
          <div className="mb-3 space-y-2">
            {activeAlerts.map((alert) => (
              <div key={alert.id} className="rounded-2xl bg-orange-50 p-3 text-orange-800">
                <div className="flex items-center gap-2 font-black">
                  <Volume2 size={18} />
                  {alert.diff === 0 ? "지금 이동할 시간이에요" : `${alert.diff}분 뒤 이동해요`}
                </div>
                <p className="mt-1 text-sm">
                  {alert.title} · {alert.start} · {alert.place}
                </p>
              </div>
            ))}
          </div>
        )}

        {appAlerts.length > 0 ? (
          <div className="space-y-2">
            <div className="flex gap-2">
              <button onClick={onClear} className="flex-1 rounded-xl bg-slate-100 py-2 text-xs font-bold text-slate-500">
                알림 지우기
              </button>
              {onReset && (
                <button onClick={onReset} className="flex-1 rounded-xl bg-slate-100 py-2 text-xs font-bold text-slate-500">
                  <RotateCcw size={13} className="mr-1 inline" /> 일정 초기화
                </button>
              )}
            </div>
            {appAlerts.map((alert) => (
              <div key={alert.id} className="rounded-2xl bg-slate-50 p-3">
                <div className="flex items-start justify-between gap-2">
                  <p className="text-sm font-black">{alert.title}</p>
                  <span className="shrink-0 text-xs text-slate-400">{alert.time}</span>
                </div>
                <p className="mt-1 text-xs text-slate-500">{alert.body}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="rounded-2xl bg-slate-50 p-3 text-sm text-slate-500">최근 알림이 없습니다.</p>
        )}
      </CardContent>
    </Card>
  );
}

function InfoBox({ icon, label, value, compact = false }) {
  return (
    <div className={`rounded-2xl bg-orange-50/70 ${compact ? "p-2" : "p-3"}`}>
      <div className="mb-0.5 flex items-center gap-1 text-slate-400">
        {icon}
        <span className="text-[10px] font-bold">{label}</span>
      </div>
      <p className={`break-keep font-black text-slate-800 ${compact ? "text-[13px]" : "text-base"}`}>{value}</p>
    </div>
  );
}
