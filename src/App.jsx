
import React, { useEffect, useMemo, useState } from "react";
import { Bell, CheckCircle2, Clock, MapPin, Phone, Plus, UserRound, CalendarDays, AlertTriangle, Navigation, Home, Save, X, Trash2, Volume2, Smartphone, Download, RotateCcw, Share2, Copy, Wifi } from "lucide-react";
import { motion } from "framer-motion";

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
  const base = "inline-flex items-center justify-center font-bold transition disabled:opacity-50 disabled:pointer-events-none";
  const variants = {
    default: "bg-emerald-600 text-white hover:bg-emerald-700",
    secondary: "bg-slate-100 text-slate-900 hover:bg-slate-200",
    outline: "border border-slate-200 bg-white text-slate-700 hover:bg-slate-50",
  };
  const sizes = {
    default: "px-4 py-2",
    sm: "px-3 py-2 text-xs",
  };
  return (
    <button className={cn(base, variants[variant] || variants.default, sizes[size] || sizes.default, className)} disabled={disabled} {...props}>
      {children}
    </button>
  );
}

const children = [
  { id: "donghun", name: "동훈", grade: "초5" },
  { id: "dongjun", name: "동준", grade: "초3" },
];

const defaultSchedules = [
  { id: 1, childId: "dongjun", day: "월", title: "한국사", place: "한국사 수업 장소", address: "장소를 입력해주세요", start: "14:00", end: "15:00", status: "대기", transport: "이동방법 입력 필요", items: "준비물 확인 필요", alert: "10분 전" },
  { id: 2, childId: "dongjun", day: "월", title: "파워점핑", place: "파워점핑", address: "장소를 입력해주세요", start: "16:30", end: "17:30", status: "대기", transport: "이동방법 입력 필요", items: "운동복, 물병", alert: "15분 전" },
  { id: 3, childId: "dongjun", day: "화", title: "바둑", place: "바둑 수업 장소", address: "장소를 입력해주세요", start: "14:00", end: "15:00", status: "대기", transport: "이동방법 입력 필요", items: "준비물 확인 필요", alert: "10분 전" },
  { id: 4, childId: "dongjun", day: "수", title: "바둑", place: "바둑 수업 장소", address: "장소를 입력해주세요", start: "14:00", end: "15:00", status: "대기", transport: "이동방법 입력 필요", items: "준비물 확인 필요", alert: "10분 전" },
  { id: 5, childId: "dongjun", day: "수", title: "파워점핑", place: "파워점핑", address: "장소를 입력해주세요", start: "16:30", end: "17:30", status: "대기", transport: "이동방법 입력 필요", items: "운동복, 물병", alert: "15분 전" },
  { id: 6, childId: "dongjun", day: "목", title: "파워점핑", place: "파워점핑", address: "장소를 입력해주세요", start: "16:30", end: "17:30", status: "대기", transport: "이동방법 입력 필요", items: "운동복, 물병", alert: "15분 전" },
  { id: 7, childId: "donghun", day: "월", title: "영어", place: "영어 수업 장소", address: "장소를 입력해주세요", start: "16:00", end: "17:00", status: "대기", transport: "이동방법 입력 필요", items: "영어 교재, 필통", alert: "10분 전" },
  { id: 8, childId: "donghun", day: "월", title: "파워점핑", place: "파워점핑", address: "장소를 입력해주세요", start: "18:20", end: "19:20", status: "대기", transport: "이동방법 입력 필요", items: "운동복, 물병", alert: "15분 전" },
  { id: 9, childId: "donghun", day: "화", title: "영어", place: "영어 수업 장소", address: "장소를 입력해주세요", start: "16:00", end: "17:00", status: "대기", transport: "이동방법 입력 필요", items: "영어 교재, 필통", alert: "10분 전" },
  { id: 10, childId: "donghun", day: "화", title: "파워점핑", place: "파워점핑", address: "장소를 입력해주세요", start: "18:20", end: "19:20", status: "대기", transport: "이동방법 입력 필요", items: "운동복, 물병", alert: "15분 전" },
  { id: 11, childId: "donghun", day: "수", title: "영어", place: "영어 수업 장소", address: "장소를 입력해주세요", start: "16:00", end: "17:00", status: "대기", transport: "이동방법 입력 필요", items: "영어 교재, 필통", alert: "10분 전" },
  { id: 12, childId: "donghun", day: "수", title: "파워점핑", place: "파워점핑", address: "장소를 입력해주세요", start: "18:20", end: "19:20", status: "대기", transport: "이동방법 입력 필요", items: "운동복, 물병", alert: "15분 전" },
  { id: 13, childId: "donghun", day: "목", title: "영어", place: "영어 수업 장소", address: "장소를 입력해주세요", start: "16:00", end: "17:00", status: "대기", transport: "이동방법 입력 필요", items: "영어 교재, 필통", alert: "10분 전" },
  { id: 14, childId: "donghun", day: "목", title: "파워점핑", place: "파워점핑", address: "장소를 입력해주세요", start: "18:20", end: "19:20", status: "대기", transport: "이동방법 입력 필요", items: "운동복, 물병", alert: "15분 전" },
  { id: 15, childId: "donghun", day: "금", title: "영어", place: "영어 수업 장소", address: "장소를 입력해주세요", start: "16:00", end: "17:00", status: "대기", transport: "이동방법 입력 필요", items: "영어 교재, 필통", alert: "10분 전" },
  { id: 16, childId: "donghun", day: "금", title: "파워점핑", place: "파워점핑", address: "장소를 입력해주세요", start: "18:20", end: "19:20", status: "대기", transport: "이동방법 입력 필요", items: "운동복, 물병", alert: "15분 전" },
];

const statusStyle = {
  "이동 전": "bg-slate-100 text-slate-700",
  "대기": "bg-blue-100 text-blue-700",
  "이동 중": "bg-orange-100 text-orange-700",
  "도착 완료": "bg-green-100 text-green-700",
  "수업 중": "bg-purple-100 text-purple-700",
  "끝남": "bg-zinc-100 text-zinc-500",
  "미확인": "bg-red-100 text-red-700",
};

function timeToMinutes(time) {
  if (!time || !time.includes(":")) return 0;
  const [h, m] = time.split(":").map(Number);
  return h * 60 + m;
}

function alertToMinutes(alertText) {
  const numberOnly = String(alertText || "10").replace(/[^0-9]/g, "");
  return numberOnly ? Number(numberOnly) : 10;
}

function getNowMinutes() {
  const now = new Date();
  return now.getHours() * 60 + now.getMinutes();
}

function getActiveAlerts(schedules, selectedChild, selectedDay) {
  const nowMinutes = getNowMinutes();
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

function loadSavedSchedules() {
  try {
    const saved = localStorage.getItem("hakwonSchedules");
    return saved ? JSON.parse(saved) : defaultSchedules;
  } catch {
    return defaultSchedules;
  }
}

function saveSchedulesToStorage(schedules) {
  try {
    localStorage.setItem("hakwonSchedules", JSON.stringify(schedules));
  } catch {}
}

const days = ["월", "화", "수", "목", "금", "토", "일"];

function getTodayKoreanDay() {
  const index = new Date().getDay();
  return ["일", "월", "화", "수", "목", "금", "토"][index];
}

function getCurrentSchedule(schedules, childId, selectedDay) {
  const now = new Date();
  const nowMinutes = now.getHours() * 60 + now.getMinutes();
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

export default function App() {
  const [role, setRole] = useState("child");
  const [selectedChild, setSelectedChild] = useState("donghun");
  const [schedules, setSchedules] = useState(loadSavedSchedules);
  const [showAdd, setShowAdd] = useState(false);
  const [selectedDay, setSelectedDay] = useState(getTodayKoreanDay());
  const [newSchedule, setNewSchedule] = useState({
    title: "",
    place: "",
    address: "",
    start: "",
    end: "",
    transport: "",
    items: "",
    alert: "10분 전",
  });
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [notificationPermission, setNotificationPermission] = useState(
    typeof Notification === "undefined" ? "unsupported" : Notification.permission
  );
  const [sentAlertIds, setSentAlertIds] = useState([]);
  const [appAlerts, setAppAlerts] = useState([]);
  const [nowTick, setNowTick] = useState(Date.now());
  const [showWebAppGuide, setShowWebAppGuide] = useState(false);
  const [copyMessage, setCopyMessage] = useState("");

  useEffect(() => {
    const timer = setInterval(() => setNowTick(Date.now()), 30000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    saveSchedulesToStorage(schedules);
  }, [schedules]);

  const child = children.find((c) => c.id === selectedChild);
  const current = useMemo(() => getCurrentSchedule(schedules, selectedChild, selectedDay), [schedules, selectedChild, selectedDay]);
  const todaySchedules = schedules
    .filter((s) => s.childId === selectedChild && s.day === selectedDay)
    .sort((a, b) => timeToMinutes(a.start) - timeToMinutes(b.start));
  const activeAlerts = useMemo(
    () => getActiveAlerts(schedules, selectedChild, selectedDay),
    [schedules, selectedChild, selectedDay, nowTick]
  );

  useEffect(() => {
    activeAlerts.forEach((alert) => {
      const alertId = `${alert.id}-${alert.day}-${alert.start}`;
      if (sentAlertIds.includes(alertId)) return;

      const childName = children.find((c) => c.id === alert.childId)?.name || "아이";
      const title = `${childName}, ${alert.title} 갈 시간이에요`;
      const body = `${alert.start} 시작 · 장소: ${alert.place}`;

      setAppAlerts((prev) => [
        {
          id: alertId,
          title,
          body,
          time: new Date().toLocaleTimeString("ko-KR", { hour: "2-digit", minute: "2-digit" }),
        },
        ...prev,
      ].slice(0, 5));

      if (notificationPermission === "granted" && typeof Notification !== "undefined") {
        new Notification(title, { body });
      }

      setSentAlertIds((prev) => [...prev, alertId]);
    });
  }, [activeAlerts, notificationPermission, sentAlertIds]);

  const requestNotificationPermission = async () => {
    if (typeof Notification === "undefined") {
      setNotificationPermission("unsupported");
      return;
    }
    const result = await Notification.requestPermission();
    setNotificationPermission(result);
  };

  const testNotification = () => {
    const childName = child?.name || "아이";
    const title = `${childName}, 다음 일정 확인해요`;
    const body = current ? `${current.title} · ${current.start} · ${current.place}` : "오늘은 등록된 일정이 없습니다.";
    setAppAlerts((prev) => [
      {
        id: `test-${Date.now()}`,
        title,
        body,
        time: new Date().toLocaleTimeString("ko-KR", { hour: "2-digit", minute: "2-digit" }),
      },
      ...prev,
    ].slice(0, 5));
    if (notificationPermission === "granted" && typeof Notification !== "undefined") {
      new Notification(title, { body });
    }
  };

  const clearAppAlerts = () => {
    setAppAlerts([]);
  };

  const resetSchedules = () => {
    if (!window.confirm("일정을 처음 상태로 되돌릴까요? 직접 추가한 일정은 사라집니다.")) return;
    setSchedules(defaultSchedules);
    setAppAlerts([]);
    setSentAlertIds([]);
  };

  const updateStatus = (id, status) => {
    setSchedules((prev) => prev.map((s) => (s.id === id ? { ...s, status } : s)));
  };

  const requestDeleteSchedule = (schedule) => {
    setDeleteTarget(schedule);
  };

  const cancelDeleteSchedule = () => {
    setDeleteTarget(null);
  };

  const confirmDeleteSchedule = () => {
    if (!deleteTarget) return;
    setSchedules((prev) => prev.filter((s) => s.id !== deleteTarget.id));
    setDeleteTarget(null);
  }; 

  const addSchedule = () => {
    if (!newSchedule.title.trim() || !newSchedule.start.trim()) return;

    const newItem = {
      id: Date.now(),
      childId: selectedChild,
      day: selectedDay,
      title: newSchedule.title.trim(),
      place: newSchedule.place.trim() || "장소를 입력해주세요",
      address: newSchedule.address.trim() || "상세 위치를 입력해주세요",
      start: newSchedule.start,
      end: newSchedule.end || newSchedule.start,
      status: "대기",
      transport: newSchedule.transport.trim() || "이동방법 입력 필요",
      items: newSchedule.items.trim() || "준비물 확인 필요",
      alert: newSchedule.alert,
    };

    setSchedules((prev) => [...prev, newItem]);
    setNewSchedule({
      title: "",
      place: "",
      address: "",
      start: "",
      end: "",
      transport: "",
      items: "",
      alert: "10분 전",
    });
    setShowAdd(false);
  }; 

  const updateNewSchedule = (field, value) => {
    setNewSchedule((prev) => ({ ...prev, [field]: value }));
  };

  const copyAppLink = async () => {
    try {
      const currentUrl = typeof window !== "undefined" ? window.location.href : "";
      if (!currentUrl) return;
      await navigator.clipboard.writeText(currentUrl);
      setCopyMessage("앱 링크를 복사했어요");
      setTimeout(() => setCopyMessage(""), 2000);
    } catch {
      setCopyMessage("복사가 지원되지 않아요");
      setTimeout(() => setCopyMessage(""), 2000);
    }
  };

  const shareApp = async () => {
    const currentUrl = typeof window !== "undefined" ? window.location.href : "";
    if (navigator.share) {
      await navigator.share({
        title: "학원 안가니?",
        text: "동훈이와 동준이 학원 이동 알림앱",
        url: currentUrl,
      });
    } else {
      copyAppLink();
    }
  }; 

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-sky-50 text-slate-900">
      <div className="mx-auto max-w-md px-4 py-5">
        <header className="mb-5">
          <div className="mb-4">
            <p className="text-sm font-medium text-emerald-700">초등학생 동선 알림앱</p>
            <h1 className="text-3xl font-black tracking-tight">학원 안가니?</h1>
          </div>
          <div className="grid grid-cols-2 rounded-3xl bg-white p-1 shadow-sm border border-slate-100">
            <button
              onClick={() => setRole("child")}
              className={`rounded-2xl py-3 text-sm font-black transition ${
                role === "child" ? "bg-emerald-600 text-white shadow" : "text-slate-500"
              }`}
            >
              아이용 화면
            </button>
            <button
              onClick={() => setRole("parent")}
              className={`rounded-2xl py-3 text-sm font-black transition ${
                role === "parent" ? "bg-emerald-600 text-white shadow" : "text-slate-500"
              }`}
            >
              부모용 화면
            </button>
          </div>
        </header>

        <div className="mb-4 grid grid-cols-2 gap-2">
          {children.map((c) => (
            <button
              key={c.id}
              onClick={() => setSelectedChild(c.id)}
              className={`rounded-2xl border p-3 text-left shadow-sm transition ${
                selectedChild === c.id ? "border-emerald-400 bg-emerald-100" : "border-slate-200 bg-white"
              }`}
            >
              <div className="flex items-center gap-2">
                <UserRound size={18} />
                <span className="font-bold">{c.name}</span>
                <span className="text-xs text-slate-500">{c.grade}</span>
              </div>
            </button>
          ))}
        </div>

        <div className="mb-4 grid grid-cols-7 gap-1">
          {days.map((day) => (
            <button
              key={day}
              onClick={() => setSelectedDay(day)}
              className={`rounded-2xl py-2 text-sm font-black transition ${
                selectedDay === day ? "bg-emerald-600 text-white shadow" : "bg-white text-slate-500 border border-slate-100"
              }`}
            >
              {day}
            </button>
          ))}
        </div>

        <WebAppGuidePanel
          isOpen={showWebAppGuide}
          onToggle={() => setShowWebAppGuide((prev) => !prev)}
          onCopy={copyAppLink}
          onShare={shareApp}
          copyMessage={copyMessage}
        />

        {role === "child" ? (
          <ChildView
            child={child}
            current={current}
            selectedDay={selectedDay}
            updateStatus={updateStatus}
            activeAlerts={activeAlerts}
            appAlerts={appAlerts}
            notificationPermission={notificationPermission}
            requestNotificationPermission={requestNotificationPermission}
            testNotification={testNotification}
            clearAppAlerts={clearAppAlerts}
            resetSchedules={resetSchedules}
          />
        ) : (
          <ParentView
            child={child}
            selectedDay={selectedDay}
            schedules={todaySchedules}
            updateStatus={updateStatus}
            showAdd={showAdd}
            setShowAdd={setShowAdd}
            newSchedule={newSchedule}
            updateNewSchedule={updateNewSchedule}
            addSchedule={addSchedule}
            requestDeleteSchedule={requestDeleteSchedule}
            deleteTarget={deleteTarget}
            cancelDeleteSchedule={cancelDeleteSchedule}
            confirmDeleteSchedule={confirmDeleteSchedule}
            activeAlerts={activeAlerts}
            appAlerts={appAlerts}
            notificationPermission={notificationPermission}
            requestNotificationPermission={requestNotificationPermission}
            testNotification={testNotification}
            clearAppAlerts={clearAppAlerts}
            resetSchedules={resetSchedules}
          />
        )}
      </div>
    </div>
  );
}

function WebAppGuidePanel({ isOpen, onToggle, onCopy, onShare, copyMessage }) {
  return (
    <Card className="mb-4 rounded-3xl border-0 bg-slate-900 text-white shadow-lg">
      <CardContent className="p-4">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-white/10 p-2">
              <Wifi size={20} />
            </div>
            <div>
              <p className="font-black">4단계 · 휴대폰 웹앱</p>
              <p className="text-xs text-white/70">모바일에서 열고 홈 화면에 추가</p>
            </div>
          </div>
          <Button size="sm" variant="secondary" className="rounded-xl" onClick={onToggle}>
            {isOpen ? "접기" : "열기"}
          </Button>
        </div>

        {isOpen && (
          <div className="mt-4 space-y-3">
            <div className="grid grid-cols-2 gap-2">
              <Button className="rounded-2xl bg-white text-slate-900 hover:bg-white/90" onClick={onShare}>
                <Share2 size={16} className="mr-2" /> 공유
              </Button>
              <Button variant="outline" className="rounded-2xl border-white/20 bg-white/5 text-white hover:bg-white/10" onClick={onCopy}>
                <Copy size={16} className="mr-2" /> 링크 복사
              </Button>
            </div>
            {copyMessage && <p className="rounded-2xl bg-white/10 p-2 text-center text-xs font-bold">{copyMessage}</p>}

            <div className="rounded-2xl bg-white/10 p-3 text-xs leading-5 text-white/80">
              <p className="mb-1 font-black text-white">휴대폰에서 쓰는 방법</p>
              <p>1. 이 앱 링크를 휴대폰으로 보냅니다.</p>
              <p>2. 모바일 브라우저에서 엽니다.</p>
              <p>3. Chrome은 메뉴에서 “홈 화면에 추가”, iPhone Safari는 공유 버튼에서 “홈 화면에 추가”를 누릅니다.</p>
              <p>4. 홈 화면 아이콘을 누르면 앱처럼 실행됩니다.</p>
            </div>

            <div className="rounded-2xl bg-emerald-400/10 p-3 text-xs leading-5 text-emerald-100">
              <p className="mb-1 font-black text-emerald-50">현재 구현된 웹앱 기능</p>
              <p>· 모바일 반응형 화면</p>
              <p>· 일정 추가·삭제·상태 변경</p>
              <p>· 브라우저 저장 기능</p>
              <p>· 앱 실행 중 시간 알림</p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

function ChildView({ child, current, selectedDay, updateStatus, activeAlerts, appAlerts, notificationPermission, requestNotificationPermission, testNotification, clearAppAlerts, resetSchedules }) {
  if (!current) {
    return (
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
        <NotificationPanel
          activeAlerts={activeAlerts}
          appAlerts={appAlerts}
          permission={notificationPermission}
          onRequestPermission={requestNotificationPermission}
          onTest={testNotification}
          onClear={clearAppAlerts}
          onReset={resetSchedules}
        />
        <Card className="overflow-hidden rounded-3xl border-0 bg-white shadow-lg">
          <CardContent className="p-6 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
              <CheckCircle2 size={32} />
            </div>
            <p className="text-sm text-slate-500">{child.name} · {selectedDay}요일</p>
            <h2 className="mt-2 text-2xl font-black">등록된 일정이 없어요</h2>
            <p className="mt-2 text-sm text-slate-500">오늘은 학원 이동 알림이 없습니다.</p>
          </CardContent>
        </Card>
      </motion.div>
    );
  }

  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
      <NotificationPanel
        activeAlerts={activeAlerts}
        appAlerts={appAlerts}
        permission={notificationPermission}
        onRequestPermission={requestNotificationPermission}
        onTest={testNotification}
        onClear={clearAppAlerts}
      />
      <Card className="overflow-hidden rounded-3xl border-0 bg-white shadow-lg">
        <CardContent className="p-5">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">{child.name}이가 지금 할 일</p>
              <h2 className="mt-1 text-3xl font-black text-emerald-700">{current.title}</h2>
            </div>
            <div className="rounded-full bg-emerald-100 p-3 text-emerald-700">
              <Navigation size={28} />
            </div>
          </div>

          <div className="mb-4 rounded-2xl bg-emerald-50 p-4">
            <div className="mb-2 flex items-center gap-2 text-lg font-bold">
              <MapPin size={20} />
              {current.place}
            </div>
            <p className="text-sm text-slate-600">{current.address}</p>
          </div>

          <div className="grid grid-cols-2 gap-2 text-sm">
            <InfoBox icon={<Clock size={18} />} label="시간" value={`${current.start} ~ ${current.end}`} />
            <InfoBox icon={<Bell size={18} />} label="알림" value={current.alert} />
            <InfoBox icon={<Home size={18} />} label="이동" value={current.transport} />
            <InfoBox icon={<CalendarDays size={18} />} label="준비물" value={current.items} />
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-2 gap-3">
        <Button className="h-16 rounded-3xl text-lg font-black" onClick={() => updateStatus(current.id, "도착 완료")}>
          <CheckCircle2 className="mr-2" /> 도착했어요
        </Button>
        <Button variant="secondary" className="h-16 rounded-3xl text-lg font-black" onClick={() => updateStatus(current.id, "끝남")}>
          끝났어요
        </Button>
      </div>

      <Button variant="outline" className="h-14 w-full rounded-3xl text-base font-bold">
        <Phone className="mr-2" size={20} /> 부모님께 연락하기
      </Button>

      <Card className="rounded-3xl border-orange-100 bg-orange-50 shadow-sm">
        <CardContent className="flex gap-3 p-4">
          <AlertTriangle className="mt-1 text-orange-600" size={22} />
          <div>
            <p className="font-bold text-orange-800">화면 알림 예시</p>
            <p className="text-sm text-orange-700">10분 뒤 {current.title} 가야 해요. 장소는 {current.place}입니다.</p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

function ParentView({ child, selectedDay, schedules, updateStatus, showAdd, setShowAdd, newSchedule, updateNewSchedule, addSchedule, requestDeleteSchedule, deleteTarget, cancelDeleteSchedule, confirmDeleteSchedule, activeAlerts, appAlerts, notificationPermission, requestNotificationPermission, testNotification, clearAppAlerts, resetSchedules }) {
  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
      <NotificationPanel
        activeAlerts={activeAlerts}
        appAlerts={appAlerts}
        permission={notificationPermission}
        onRequestPermission={requestNotificationPermission}
        onTest={testNotification}
        onClear={clearAppAlerts}
      />
      <Card className="rounded-3xl border-0 bg-white shadow-lg">
        <CardContent className="p-5">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">부모 확인 화면</p>
              <h2 className="text-2xl font-black">{child.name} {selectedDay}요일 일정</h2>
            </div>
            <Button className="rounded-2xl" onClick={() => setShowAdd(!showAdd)}>
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
                <Button variant="outline" className="rounded-2xl bg-white" onClick={cancelDeleteSchedule}>취소</Button>
                <Button className="rounded-2xl bg-red-600 hover:bg-red-700" onClick={confirmDeleteSchedule}>삭제하기</Button>
              </div>
            </div>
          )}

          {showAdd && (
            <div className="mb-4 rounded-3xl border border-emerald-100 bg-emerald-50 p-4">
              <div className="mb-3 flex items-center justify-between">
                <div>
                  <p className="text-sm text-emerald-700 font-bold">새 일정 추가</p>
                  <p className="text-xs text-slate-500">{child.name} · {selectedDay}요일 일정으로 저장됩니다.</p>
                </div>
                <button onClick={() => setShowAdd(false)} className="rounded-full bg-white p-2 text-slate-500">
                  <X size={18} />
                </button>
              </div>

              <div className="space-y-2">
                <input value={newSchedule.title} onChange={(e) => updateNewSchedule("title", e.target.value)} placeholder="과목명 예: 영어, 바둑, 파워점핑" className="w-full rounded-2xl border border-emerald-100 bg-white px-4 py-3 text-sm outline-none focus:border-emerald-400" />
                <div className="grid grid-cols-2 gap-2">
                  <input type="time" value={newSchedule.start} onChange={(e) => updateNewSchedule("start", e.target.value)} className="w-full rounded-2xl border border-emerald-100 bg-white px-4 py-3 text-sm outline-none focus:border-emerald-400" />
                  <input type="time" value={newSchedule.end} onChange={(e) => updateNewSchedule("end", e.target.value)} className="w-full rounded-2xl border border-emerald-100 bg-white px-4 py-3 text-sm outline-none focus:border-emerald-400" />
                </div>
                <input value={newSchedule.place} onChange={(e) => updateNewSchedule("place", e.target.value)} placeholder="장소명 예: ○○영어학원" className="w-full rounded-2xl border border-emerald-100 bg-white px-4 py-3 text-sm outline-none focus:border-emerald-400" />
                <input value={newSchedule.address} onChange={(e) => updateNewSchedule("address", e.target.value)} placeholder="상세 위치 예: 상가 3층, 학교 후문 앞" className="w-full rounded-2xl border border-emerald-100 bg-white px-4 py-3 text-sm outline-none focus:border-emerald-400" />
                <input value={newSchedule.transport} onChange={(e) => updateNewSchedule("transport", e.target.value)} placeholder="이동방법 예: 도보, 셔틀, 부모 차량" className="w-full rounded-2xl border border-emerald-100 bg-white px-4 py-3 text-sm outline-none focus:border-emerald-400" />
                <input value={newSchedule.items} onChange={(e) => updateNewSchedule("items", e.target.value)} placeholder="준비물 예: 교재, 필통, 물병" className="w-full rounded-2xl border border-emerald-100 bg-white px-4 py-3 text-sm outline-none focus:border-emerald-400" />
                <select value={newSchedule.alert} onChange={(e) => updateNewSchedule("alert", e.target.value)} className="w-full rounded-2xl border border-emerald-100 bg-white px-4 py-3 text-sm outline-none focus:border-emerald-400">
                  <option>5분 전</option>
                  <option>10분 전</option>
                  <option>15분 전</option>
                  <option>20분 전</option>
                  <option>30분 전</option>
                </select>
              </div>

              <Button onClick={addSchedule} className="mt-3 h-12 w-full rounded-2xl font-black" disabled={!newSchedule.title.trim() || !newSchedule.start.trim()}>
                <Save size={18} className="mr-2" /> 일정 저장
              </Button>
            </div>
          )}

          <div className="space-y-3">
            {schedules.length === 0 && (
              <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50 p-6 text-center">
                <p className="font-bold text-slate-600">등록된 일정이 없습니다.</p>
                <p className="mt-1 text-sm text-slate-400">일정 추가 버튼으로 새 일정을 넣을 수 있습니다.</p>
              </div>
            )}
            {schedules.map((s) => (
              <div key={s.id} className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                <div className="mb-2 flex items-start justify-between gap-2">
                  <div>
                    <p className="font-black">{s.title}</p>
                    <p className="text-sm text-slate-500">{s.start} ~ {s.end}</p>
                  </div>
                  <span className={`rounded-full px-3 py-1 text-xs font-bold ${statusStyle[s.status] || "bg-slate-100 text-slate-700"}`}>
                    {s.status}
                  </span>
                </div>
                <p className="mb-1 flex items-center gap-1 text-sm text-slate-700"><MapPin size={15} /> {s.place}</p>
                <p className="mb-3 text-sm text-slate-500">이동: {s.transport} · 준비물: {s.items}</p>
                <div className="grid grid-cols-4 gap-2">
                  <Button size="sm" variant="outline" className="rounded-xl" onClick={() => updateStatus(s.id, "이동 중")}>이동 중</Button>
                  <Button size="sm" variant="outline" className="rounded-xl" onClick={() => updateStatus(s.id, "도착 완료")}>도착</Button>
                  <Button size="sm" variant="outline" className="rounded-xl" onClick={() => updateStatus(s.id, "끝남")}>끝남</Button>
                  <Button size="sm" variant="outline" className="rounded-xl border-red-200 text-red-600 hover:bg-red-50" onClick={() => requestDeleteSchedule(s)}>
                    <Trash2 size={14} className="mr-1" /> 삭제
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

function NotificationPanel({ activeAlerts, appAlerts, permission, onRequestPermission, onTest, onClear, onReset }) {
  const permissionLabel = {
    granted: "알림 허용됨",
    denied: "알림 차단됨",
    default: "알림 허용 필요",
    unsupported: "브라우저 미지원",
  }[permission] || "알림 확인 필요";

  return (
    <Card className="rounded-3xl border-0 bg-white shadow-lg">
      <CardContent className="p-4">
        <div className="mb-3 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <div className="rounded-full bg-blue-100 p-2 text-blue-700">
              <Smartphone size={20} />
            </div>
            <div>
              <p className="font-black">화면 알림</p>
              <p className="text-xs text-slate-500">{permissionLabel}</p>
            </div>
          </div>
          <div className="flex gap-1">
            {permission !== "granted" && permission !== "unsupported" && (
              <Button size="sm" variant="outline" className="rounded-xl" onClick={onRequestPermission}>
                허용
              </Button>
            )}
            <Button size="sm" variant="outline" className="rounded-xl" onClick={onTest}>
              테스트
            </Button>
          </div>
        </div>

        {activeAlerts.length > 0 && (
          <div className="mb-3 space-y-2">
            {activeAlerts.map((alert) => (
              <div key={alert.id} className="rounded-2xl bg-orange-50 p-3 text-orange-800">
                <div className="flex items-center gap-2 font-black">
                  <Volume2 size={18} />
                  {alert.diff === 0 ? "지금 이동할 시간이에요" : `${alert.diff}분 뒤 이동해요`}
                </div>
                <p className="mt-1 text-sm">{alert.title} · {alert.start} · {alert.place}</p>
              </div>
            ))}
          </div>
        )}

        <div className="mb-3 rounded-2xl border border-blue-100 bg-blue-50 p-3">
          <div className="mb-2 flex items-center gap-2 font-black text-blue-800">
            <Download size={18} />
            휴대폰 앱처럼 쓰기
          </div>
          <p className="text-xs leading-5 text-blue-700">
            모바일 브라우저에서 열고 홈 화면에 추가하면 앱처럼 실행할 수 있습니다. 현재 시제품은 앱을 켜둔 상태에서 알림이 작동하며, 앱을 꺼도 울리는 푸시알림은 Firebase 서버 연동 단계에서 구현합니다.
          </p>
        </div>

        {appAlerts.length > 0 ? (
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <p className="text-xs font-bold text-slate-500">최근 알림</p>
              <span className="text-xs font-bold text-slate-400">최근 5개</span>
            </div>
            <div className="flex gap-2">
              <button onClick={onClear} className="flex-1 rounded-xl bg-slate-100 py-2 text-xs font-bold text-slate-500">알림 지우기</button>
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
          <p className="rounded-2xl bg-slate-50 p-3 text-sm text-slate-500">
            일정 시작 전 설정한 시간 안에 들어오면 이곳에 알림이 뜹니다.
          </p>
        )}
      </CardContent>
    </Card>
  );
}

function InfoBox({ icon, label, value }) {
  return (
    <div className="rounded-2xl bg-slate-50 p-3">
      <div className="mb-1 flex items-center gap-1 text-slate-500">
        {icon}
        <span className="text-xs font-bold">{label}</span>
      </div>
      <p className="break-keep font-bold">{value}</p>
    </div>
  );
}
